import React, { useContext } from "react";
import { Context } from "../Context/Cotext";
import { FaTrashAlt } from "react-icons/fa";

export const NoteList = () => {
  const { state, dispatch } = useContext(Context);

  

  return state.map((note) => (
    <div
      key={note.id}
      className={`flex flex-col w-[300px] md:w-[25vw] h-[200px] justify-center rounded-2xl shadow-2xl`}
      style={{ backgroundColor: note.backGround }}
    >
      <span className="mx-3 my-2 font-bold">{note.title}</span>
      <textarea
        value={note.body}
        onChange={(e) =>
          dispatch({
            type: "handleChangeNote",
            payload: { id: note.id, textAreaValue: e.target.value },
          })
        }
        className="h-5/10 mx-3 mb-4 outline-none border-none resize-none"
      ></textarea>
      <div className="w-9/10 flex justify-between">
        <span className=" text-[#212121] ml-4">{note.date}</span>
        <button
          className="cursor-pointer text-[20px]"
          onClick={() =>
            dispatch({ type: "handleDeleteNote", payload: { id: note.id } })
          }
        >
          <FaTrashAlt className="text-[#212121]" />
        </button>
      </div>
    </div>
  ));
};
