import { useContext, useState } from "react";
import { Context } from "../Context/Cotext";

export const AddNote = () => {
  const { dispatch } = useContext(Context);
  const [textareaValue, setTextareaValue] = useState("");
  const handleAddNote = () => {
    if (textareaValue !== "") {
      dispatch({
        type: "handleAddNote",
        payload: { textAreaValue: textareaValue },
      });
      setTextareaValue("")
    } else return textareaValue
  };
  return (
    <div className="bg-[#4DD0E1] flex flex-col w-[300px] h-[200px] justify-center rounded-2xl">
      <textarea
        className="h-6/10 mx-3 mb-4 outline-none border-none resize-none"
        placeholder="type to add note..."
        onChange={(e) => setTextareaValue(e.target.value)}
        value={textareaValue}
      ></textarea>
      <div className="flex justify-end mr-4">
        <button
          onClick={handleAddNote}
          className="bg-[#252525] text-white w-fit px-4 py-1 rounded-2xl cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};
