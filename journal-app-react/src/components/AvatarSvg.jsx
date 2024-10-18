import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import React from "react";

const AvatarSvg = () => {
  const userName = localStorage.getItem("userName") || "Guest";

  // Generate a random avatar based on the user's name using Dicebear library
  const avatar = createAvatar(lorelei, {
    seed: userName,
    dataUri: true,
  });

  const svg = avatar.toString();
  return (
    <div
      className="w-16 h-16 bg-transparent rounded-full flex transition hover:scale-110 shadow-lg"
      dangerouslySetInnerHTML={{ __html: svg }} // Render the SVG
    />
  );
};

export default AvatarSvg;
