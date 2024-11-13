"use client";

import { Post } from "@/types/post";
import Image from "next/image";

interface BlogContentProps {
  post: Post;
}

export default function BlogContent({ post }: BlogContentProps) {
  const featuredImage = post?.featuredImage?.node?.mediaDetails?.sizes.find(
    (image) => image.name === "mk_image_size_landscape"
  );

  console.log("img", featuredImage);

  return (
    <div className="flex flex-col space-y-8">
      <div>
        <Image
          src={featuredImage?.sourceUrl ?? ""}
          alt={post.title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h1 className="font-medium text-[#21005E] text-6xl leading-[64px]">
        {post.title}
      </h1>
      <div className="rich-text">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
