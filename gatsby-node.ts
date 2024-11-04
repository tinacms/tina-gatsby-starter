import express,{ Express } from "express";

exports.onCreateDevServer = ({ app }: { app: Express }) => {
  app.use("/admin", express.static("public/admin"));
};