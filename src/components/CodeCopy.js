import React from "react";
import Copy from "./Copy";

const CodeCopy = async ({ myCode }) => {
  return (
    <div className="flex justify-between p-2 mt-4">
      <div>Example Code</div>
      <Copy myCode={JSON.stringify(myCode)} />
    </div>
  );
};

export default CodeCopy;
