import React from "react";
import { songsData } from "../assets/assets";

const Player = () => {
  return (
    <div className="h-[10%] bg-primary-bg flex justify-between items-center text-primary-text px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={songsData[0].image} alt="" />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
