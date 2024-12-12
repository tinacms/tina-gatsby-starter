import React from "react";
import { client } from "../../tina/__generated__/client";

import { Link } from "gatsby";
import Layout from "../components/layout";
import PostClient from "../components/post-client";

const PostTemplate = (props) => {
  console.log("Post Template Log:", props);

  const { serverData } = props;

  return (
    <Layout>
      <Link
        to="/"
        className="items-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-200 ease-in-out"
      >
        🏚️ Go back home
      </Link>
      <h1 className="text-4xl font-bold my-4">Post page</h1>
      <PostClient {...serverData} />
    </Layout>
  );
};

export default PostTemplate;

export async function getServerData(props) {
  console.log("getServerData Fired", props);

  const { pageContext } = props;

  const postData = await client.queries.post({
    relativePath: pageContext.relativePath,
  });

  return { props: postData };
}
