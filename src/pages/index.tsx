import type { HeadFC } from "gatsby"
import React from "react";
import {client} from "../../tina/__generated__/client";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";


const IndexPage= ({serverData}:any) => {
  
  const { data } = useTina({
    query: serverData.query,
    variables: serverData.variables,
    data: serverData.data,
  })

  return (
    <div>
    <h1>Post page:</h1>
    <h1 data-tina-field={tinaField(data?.post, "title")}>
      {data?.post?.title}
    </h1>

    <div data-tina-field={tinaField(data?.post, "body")}>
      <TinaMarkdown content={data?.post?.body} />
    </div>
  </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export async function getServerData() {
  const postData = await client.queries.post({ relativePath: 'hello-world.md' });

  return {props:postData}
}