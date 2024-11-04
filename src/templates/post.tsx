import React from "react";
import { client } from "../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { navigate } from "gatsby";

const PostTemplate = ({ serverData }: any) => {
  const { data } = useTina({
    query: serverData.query,
    variables: serverData.variables,
    data: serverData.data,
  });

  return (
    <div>
      <button onClick={() => {navigate("/");}}>🏚️ Go back home</button>
      <h1>Post page</h1>
      <h1 data-tina-field={tinaField(data?.post, "title")}>
        {data?.post?.title}
      </h1>

      <div data-tina-field={tinaField(data?.post, "body")}>
        <TinaMarkdown content={data?.post?.body} />
      </div>
    </div>
  );
};

export default PostTemplate;

export async function getServerData({ pageContext }: any) {
  const postData = await client.queries.post({
    relativePath: pageContext.relativePath,
  });

  return { props: postData };
}
