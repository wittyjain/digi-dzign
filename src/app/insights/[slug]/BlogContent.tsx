"use client";

import Image from "next/image";

interface Post {
  __typename: string;
  content: string;
  date: string;
  excerpt: string;
  modified: string;
  slug: string;
  title: string;
  databaseId: number;
  featuredImage: {
    __typename: string;
    node: {
      __typename: string;
      mediaDetails: {
        __typename: string;
        sizes: Array<{
          __typename: string;
          sourceUrl: string;
          width: string;
          height: string;
        }>;
      };
    };
  };
  categories: {
    __typename: string;
    nodes: Array<{
      __typename: string;
      name: string;
      slug: string;
    }>;
  };
}

interface BlogContentProps {
  post: Post;
}

export default function BlogContent({ post }: BlogContentProps) {
  const featuredImage = post?.featuredImage?.node?.mediaDetails?.sizes[0];
  console.log(post);
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <Image
          src={featuredImage.sourceUrl}
          alt={post.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h1 className="font-medium text-[#21005E] text-6xl leading-[60px]">
        {post.title}
      </h1>
      <div className="rich-text">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
