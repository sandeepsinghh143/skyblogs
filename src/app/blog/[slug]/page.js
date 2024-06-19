import React from "react";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { PortableText } from "next-sanity";
import { Component } from "@/components/PortableComponent";
import Share from "@/components/Share";

export async function generateMetadata({ params }) {
  const query = `*[_type=="post" && slug.current == $slug][0] {
    title,
    meta_description
  }`;

  try {
    const post = await client.fetch(query, { slug: params.slug });

    if (!post) {
      console.log("No post found for slug:", params.slug);
      return {
        title: "Post not found",
        description: "",
      };
    }

    return {
      title: post.title || "Default Title",
      description: post.meta_description || "Default Description",
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      title: "Error",
      description: "An error occurred while fetching the metadata.",
    };
  }
}

const page = async ({ params }) => {
  const query = `*[_type=="post" && slug.current == "${params.slug}"] {
     title,thumbnail,content,meta_description,tags,_updatedAt,author->{bio,name,image}
  }[0]`;
  const post = await client.fetch(query);
  const myDate = new Date(post._updatedAt);

  // Format the date with the Asia/Kolkata time zone
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
  }).format(myDate);

  return (
    <article className="p-4 text-black xl:w-3/5  md:w-4/5 m-auto mb-10">
      <h1 className="text-5xl font-bold">{post.title}</h1>
      <div className="flex justify-between items-center flex-wrap py-4">
        <div className="flex items-center gap-4">
          <Image
            src={urlForImage(post.author.image)}
            width={50}
            height={50}
            className="rounded-full"
            alt="author-pic"
          />
          <div>
            <div className="font-semibold">{post.author.name}</div>
            <div className="text-xs">{post.author.bio}</div>
          </div>
        </div>
        <div>
          <span className="font-semibold">Last Updated :</span> {formattedDate}
        </div>
      </div>
      <div className="relative w-full h-96 my-4">
        <Image src={urlForImage(post.thumbnail)} fill alt="thumbnail" />
      </div>
      <section>
        <PortableText value={post.content} components={Component} />
      </section>
      <h3 className="my-4 text-2xl font-bold">Tags</h3>
      <div className="flex gap-8 flex-wrap">
        {post.tags.map((tag, index) => (
          <div className="tag w-fit py-2 px-4" key={index}>
            {tag}
          </div>
        ))}
      </div>
      <Share para={params.slug} title={post.title} />
    </article>
  );
};

export default page;
