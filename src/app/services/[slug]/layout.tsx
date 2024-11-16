import BlogCommentForm from "@/app/sections/BlogCommentForm";
import ContactForm from "@/app/sections/ContactForm";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getClient } from "@/lib/ApolloClient";
import { Post } from "@/types/post";
import getAllServices from "@/queries/Services/getAllServices";
import { Service } from "@/types/service";
import getAllServicesSlugs from "@/queries/Services/getAllServicesSlugs";

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

export default async function ServiceLayout({
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
      <div className="px-4 md:px-8 lg:px-12 xl:px-16 xl:py-8 ">
        <div>{children}</div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: getAllServicesSlugs,
  });
  const nodes = data.services.nodes;

  return nodes.map((service: Service) => ({ slug: service.slug }));
}
