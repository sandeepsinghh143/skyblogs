import { client } from "../../sanity/lib/client";
import BlogCard from "@/components/BlogCard";

export const revalidate = 10; //seconds

export default async function Home() {
  const query = `*[_type=="post"] | order(_createdAt asc){
     title,
     thumbnail,
     meta_description,
     "slug":slug.current,
  }`;

  const posts = await client.fetch(query);
  return (
    <div className="p-4">
      <h1 className="text-5xl text-center font-bold p-8">Our Blogs</h1>
      <section className="flex justify-center flex-wrap gap-4">
        {posts.map((post) => (
          <BlogCard post={post} key={post.slug} />
        ))}
      </section>
    </div>
  );
}
