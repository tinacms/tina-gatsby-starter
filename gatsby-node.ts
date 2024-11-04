import express, { Express } from "express";
import type { GatsbyNode } from 'gatsby';
import client from "./tina/__generated__/client";
import path from "path";

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {

  const { createPage } = actions

  const postsResult = await client.queries.postConnection({ first: 1000 });
  const postsEdges = postsResult.data.postConnection.edges;

  postsEdges?.forEach((postEdge) => {
    const post = postEdge?.node;
    if (post)
      createPage({
        path: "post/"+post._sys.filename,
        component: path.resolve(`./src/templates/post.tsx`),
        context:{
          relativePath: post._sys.relativePath,
        }
      });
  });
}

exports.onCreateDevServer = ({ app }: { app: Express }) => {
  app.use("/admin", express.static("public/admin"));
};