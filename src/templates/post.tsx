import React from "react";
import { client } from "../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { navigate } from "gatsby";
import Layout from "../components/layout";

const PostTemplate = ({ serverData }: any) => {
  const { data } = useTina({
    query: serverData.query,
    variables: serverData.variables,
    data: serverData.data,
  });

  return (
    <Layout>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="flex items-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-200 ease-in-out"
      >
        🏚️ Go back home
      </button>
      <h1 className="text-4xl font-bold my-4">Post page</h1>
      <h1
        className="text-3xl font-semibold my-8 text-orange-400"
        data-tina-field={tinaField(data?.post, "title")}
      >
        {data?.post?.title}
      </h1>

      <div className="mb-6" data-tina-field={tinaField(data?.post, "body")}>
        <TinaMarkdown content={data?.post?.body} />
      </div>
    </Layout>
  );
};

export default PostTemplate;

export async function getServerData({ pageContext }: any) {
  const postData = await client.queries.post({
    relativePath: pageContext.relativePath,
  });

  return { props: postData };
}
