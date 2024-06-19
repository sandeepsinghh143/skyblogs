import React from "react";

const loading = () => {
  return (
    <div className="p-4 xl:w-3/5  md:w-4/5 m-auto mb-10">
      <div className="skeleton h-6 w-full mb-2"></div>
      <div className="skeleton h-6 w-full"></div>
      <div className="flex justify-between items-center flex-wrap py-4">
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 w-16 rounded-full"></div>
          <div>
            <div className="skeleton w-40 h-6 mb-2"></div>
            <div className="skeleton w-46 h-6"></div>
          </div>
        </div>
        <div className="skeleton w-80 h-6"></div>
      </div>
      <div className="skeleton w-full h-96 my-4"></div>
      <section>
        <div className="skeleton w-full h-96"></div>
      </section>
      <h3 className="skeleton my-4 w-60 h-6"></h3>
      <div className="flex gap-8 flex-wrap">
        {[1, 2, 3, 4].map((tag, index) => (
          <div className="skeleton w-40 h-12" key={index}></div>
        ))}
      </div>
      <div className="skeleton h-6 w-40 mt-6"></div>
    </div>
  );
};

export default loading;
