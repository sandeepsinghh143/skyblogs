import React from "react";

const Loading = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold p-8">Our Blogs</h1>
      <div className="flex flex-wrap w-[90%] justify-center p-2 m-auto gap-4 bg-white">
        {[1, 2, 3, 4, 5, 6].map((ele) => (
          <div className="w-96">
            <div className="w-full h-52 skeleton mb-2"></div>
            <div className="w-full flex flex-col gap-2">
              <h2 className="skeleton h-4 w-full"></h2>
              <p className="skeleton h-8 w-full"></p>
              <div className="w-full skeleton h-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
