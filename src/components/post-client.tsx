"use client";
import React from "react";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { PostQuery } from "../../tina/__generated__/types";

interface PostClientProps {
  query: string;
  variables: any;
  data: any;
}

function PostClient(props: PostClientProps) {
  const { data } = useTina<PostQuery>({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <h1
        className="text-3xl font-semibold my-8 text-orange-400"
        data-tina-field={tinaField(data?.post, "title")}
      >
        {data?.post?.title}
      </h1>

      <div className="mb-6" data-tina-field={tinaField(data?.post, "body")}>
        <TinaMarkdown content={data?.post?.body} />
      </div>
    </>
  );
}

export default PostClient;
