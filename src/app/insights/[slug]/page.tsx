import { getClient, PreloadQuery } from "@/lib/ApolloClient";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogContent from "./BlogContent";
import getSinglePost from "@/queries/getSinglePost";

export default async function PostRoute({
  params,
}: {
  params: { slug: string };
}) {
  const { data } = await getClient().query({
    query: getSinglePost,
    variables: { slug: params.slug },
  });

  if (!data) return notFound();

  console.log("gql resp data", data);

  return (
    // <PreloadQuery
    //   query={getSinglePost}
    //   variables={{
    //     slug: params.slug,
    //   }}
    // >
    //   <Suspense fallback={<>loading</>}>
    <BlogContent post={data?.post} />
    //   </Suspense>
    // </PreloadQuery>
  );
}
