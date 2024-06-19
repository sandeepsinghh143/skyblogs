import React from "react";

const PostSkeleton = () => {
  return (
    <div className="w-96">
      <div className="w-full h-52 skeleton mb-2"></div>
      <div className="w-full flex flex-col gap-2">
        <h2 className="skeleton h-4 w-full"></h2>
        <p className="skeleton h-8 w-full"></p>
        <div className="w-full skeleton h-4"></div>
      </div>
    </div>
  );
};

export default PostSkeleton;
