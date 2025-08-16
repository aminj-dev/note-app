import React, { useContext, useState } from "react";
import { Context } from "../Context/Cotext";

export const NoteList = () => {
  const { state } = useContext(Context);

  return state.map((note) => (
    <div className="flex flex-col w-[300px] h-[200px] justify-center rounded-2xl bg-[#FFF176]">
      <textarea className="h-6/10 mx-3 mb-4 outline-none border-none resize-none">
        {note.body}
      </textarea>
        <span className=" text-[#212121] ml-4">
          {note.date}
        </span>
    </div>
  ));
};
