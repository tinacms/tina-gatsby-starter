import { Link, type HeadFC } from "gatsby";
import React from "react";
import { client } from "../../tina/__generated__/client";
import Layout from "../components/layout";

const IndexPage = ({ serverData }: any) => {
  const posts = serverData?.posts || [];

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-12">TinaCMS x Gatsby</h1>
      <h2 className="text-2xl font-bold mb-6">All posts:</h2>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.node.id} className="border-b border-gray-200 pb-2">
            <Link
              to={`/post/${post.node._sys.filename}`}
              className="text-xl text-orange-400 hover:text-orange-800 transition duration-200"
            >
              {post.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export async function getServerData() {
  try {
    const postsResult = await client.queries.postConnection();
    return {
      props: {
        posts: postsResult.data.postConnection.edges,
      },
    };
  } catch (error: any) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
