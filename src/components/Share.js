"use client";
import React from "react";
import { PiShareNetworkFill } from "react-icons/pi";
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

const Share = ({ para, title }) => {
  const myUrl = `https://skyblogs.vercel.app/blog/${para}`;
  const shareOnSocial = async () => {
    try {
      await navigator.share({
        title: title,
        text: "Found this Awesome Article",
        url: myUrl,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-10">Share This Page</h2>
      <div className="flex items-center flex-wrap gap-4">
        <PiShareNetworkFill
          onClick={shareOnSocial}
          className="text-5xl cursor-pointer"
        />
        <FacebookShareButton url={myUrl} quote={title} hashtag={"#skyblog"}>
          <FacebookIcon size={56} round />
        </FacebookShareButton>
        <TelegramShareButton url={myUrl} title={title}>
          <TelegramIcon size={56} round />
        </TelegramShareButton>
        <TwitterShareButton url={myUrl} title={title}>
          <TwitterIcon size={56} round />
        </TwitterShareButton>
        <LinkedinShareButton url={myUrl}>
          <LinkedinIcon size={56} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={myUrl} title={title} separator=":: ">
          <WhatsappIcon size={56} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Share;
