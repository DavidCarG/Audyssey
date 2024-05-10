import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
import DisplayHome from "./DisplayHome";

const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-secondary-bg text-primary-text overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
