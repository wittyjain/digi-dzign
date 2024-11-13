import BlogCommentForm from "@/app/sections/BlogCommentForm";
import ContactForm from "@/app/sections/ContactForm";
import OurInsights from "@/app/sections/OurInsights";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import SubscribeNewsletter from "./SubscribeNewsletter";
import QuickLinks from "./QuickLinks";
import { getClient } from "@/lib/ApolloClient";
import getAllPostSlugs from "@/queries/Posts/getAllPostSlugs";
import { Post } from "@/types/post";

const convertSlugToTitle = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: convertSlugToTitle(params.slug),
    description: "",
    // robots: "index, follow",
    // alternates: {
    //   canonical: `/${params.slug}`,
    // },
    // keywords: "",
    // openGraph: {
    //   type: "article",
    //   url: `/${params.slug}`,
    //   title: "",
    //   description: "",
    //   siteName: "",
    //   images: [
    //     {
    //       url: "",
    //       alt: "",
    //     },
    //   ],
    //   publishedTime: "",
    //   modifiedTime: "",
    //   authors: "",
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: "",
    //   description: "",
    //   site: "",
    //   images: [
    //     {
    //       url: "",
    //       alt: "",
    //     },
    //   ],
    // },
  };
}

export default async function LayoutRoute({
  params,
  children,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  // const data = await getPostBySlug(params.slug);
  // if (data.data.length === 0) return notFound();

  return (
    <div className="">
      <div className="px-4 md:px-8 lg:px-12 xl:px-16 xl:py-8 grid lg:grid-cols-12 gap-24">
        <div className="lg:col-span-9 lg:col-start-1">
          <div>{children}</div>
          <div>
            <BlogCommentForm />
          </div>
        </div>
        <div className="col-span-3 col-start-10 hidden lg:flex flex-col space-y-8">
          <SubscribeNewsletter />
          <QuickLinks />
        </div>
      </div>
      <div>
        <OurInsights showHead={false} />
        <ContactForm />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: getAllPostSlugs,
    variables: { after: "null", first: 10 },
  });
  const nodes = data.posts.nodes;

  return nodes.map((post: Post) => ({ slug: post.slug }));
}
