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
          className="rounded-2xl"
        />
      </div>
      <div className="flex justify-start items-center space-x-4">
        {post.categories.nodes.map((category) => (
          <div className="px-4 py-2 w-fit bg-[#F6E7FF] text-[#A300FF] rounded-full uppercase font-semibold text-sm">
            {category.name}
          </div>
        ))}
      </div>
      <h1 className="font-medium text-[#21005E] text-6xl leading-[64px]">
        {post.title}
      </h1>
      <div className="flex items-center space-x-2 text-xl font-medium tracking-wider text-[#21005E] ">
        <div
          className="w-10 h-10 flex justify-center items-center rounded-full"
          style={{
            background:
              "linear-gradient(191.95deg, #A100FF 8.73%, #21005E 56.58%)",
          }}
        >
          <Image
            aria-hidden
            src={"/icons/small-logo-icon-white.png"}
            alt={""}
            width={20}
            height={20}
          />
        </div>
        <span>By {post?.author?.node?.name ?? "DigiDzign"}</span>
        <span>•</span>
        <span className="font-light">
          {/*content?.readTime ??*/ "5 mins read"}
        </span>
      </div>
      <div className="rich-text">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
