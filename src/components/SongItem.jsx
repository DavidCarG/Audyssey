import React from "react";

const SongItem = ({ name, image, desc, id }) => {
  return (
    <div className="min-w-[180px] p-2 px-3 ronded cursor-pointer hover:bg-album-hover">
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-album-desc text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
