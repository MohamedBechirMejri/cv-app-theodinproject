import React from "react";
import {
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaFacebookSquare,
} from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const SocialPresence = ({
  socialLinks,
}: {
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    github: string;
    youtube: string;
    discord: string;
  };
}) => {
  return (
    <div className="flex flex-col max-w-[52rem] w-full text-gray-700">
      {" "}
      <div className="flex w-full px-4 font-medium gap-11">
        <div className="flex flex-col items-end justify-start gap-1">
          <h1
            className={`font-bold text-2xl text-black  tracking-widest uppercase`}
          >
            Social
          </h1>
          <h1 className="text-2xl font-bold tracking-widest text-black uppercase opacity-0">
            experience
          </h1>
          <p className="flex gap-1"></p>
        </div>
        <div className="flex flex-wrap items-start justify-start gap-4">
          {Object.entries(socialLinks)
            .filter(l => l[1] !== "" && l[0] !== "linkedin")
            .map((link, index) => {
              return (
                <h1 key={index} className="flex gap-2">
                  {link[0] === "facebook" ? (
                    <FaFacebookSquare className="text-2xl" />
                  ) : link[0] === "twitter" ? (
                    <BsTwitter className="text-2xl" />
                  ) : link[0] === "instagram" ? (
                    <BsInstagram className="text-2xl" />
                  ) : link[0] === "github" ? (
                    <FaGithub className="text-2xl" />
                  ) : link[0] === "youtube" ? (
                    <FaYoutube className="text-2xl" />
                  ) : link[0] === "discord" ? (
                    <FaDiscord className="text-2xl" />
                  ) : null}
                  <span>{link[1]}</span>
                </h1>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SocialPresence;
