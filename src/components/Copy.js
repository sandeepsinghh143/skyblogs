"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsClipboard2MinusFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";

const Copy = ({ myCode }) => {
  const data = JSON.parse(myCode);
  const [copy, setCopy] = useState(false);
  const timeoutRef = useRef(null);

  const handleCodeCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(data.code);
    timeoutRef.current = setTimeout(() => {
      setCopy(false);
    }, 10000);
  };

  useEffect(() => {
    return () => {
      // Cleanup function to clear the timeout when the component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div onClick={handleCodeCopy}>
      {copy ? (
        <div className="flex items-center cursor-default gap-2">
          <FaCheck className="text-2xl" />
          Copied🚀
        </div>
      ) : (
        <BsClipboard2MinusFill className="text-2xl cursor-pointer" />
      )}
    </div>
  );
};

export default Copy;
