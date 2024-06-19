import React from "react";
import PostSkeleton from "./PostSkeleton";

const Loading = () => {
  return (
    <div className="w-full">
      <div className="skeleton h-12 w-60 m-auto my-4"></div>
      <div className="flex flex-row flex-wrap w-[90%] justify-center p-2 m-auto gap-4 gap-y-16">
        {[1, 2, 3, 4, 5, 6].map((ele) => (
          <PostSkeleton key={ele} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
