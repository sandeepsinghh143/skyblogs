import Image from "next/image";
import React from "react";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";

const BlogCard = ({ post }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="relative w-full h-52">
        <Image src={urlForImage(post.thumbnail)} alt="thumbnail" fill />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.meta_description.slice(0, 100)}...</p>
        <div className="card-actions">
          <Link href={`/blog/${post.slug}`} className="w-full">
            <button className="btn btn-primary w-full">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

// const image=(
//   <div className="w-[30%] border border-black">
//       <div className="relative h-60">
//         <Image src={urlForImage(post.thumbnail)} alt="thumbnail" fill />
//       </div>
//       <div className="p-2">
//         <div className="font-semibold text-xl">{post.title}</div>
//         <div>{post.meta_description.slice(0, 200)}...</div>
//         <button className="bg-orange-400 w-full text-white p-2">
//           Read More
//         </button>
//       </div>
//     </div>
// )
