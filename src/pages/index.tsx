import { Link, type HeadFC } from "gatsby";
import React from "react";
import { client } from "../../tina/__generated__/client";

const IndexPage = ({ serverData }: any) => {
  return (
    <div>
      <h1>All posts:</h1>
      <ul>
        {serverData.map((post: any) => (
          <li key={post.node.id}>
            <Link to={`/post/${post.node._sys.filename}`}>{post.node.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export async function getServerData() {
  const postsResult = await client.queries.postConnection({ first: 1000 });
  return { props: postsResult.data.postConnection.edges };
}
