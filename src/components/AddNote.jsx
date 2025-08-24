import { useContext, useState } from "react";
import { MainContext } from "../Context/MainCotext";

export const AddNote = () => {
  const { dispatch } = useContext(MainContext);
  const [textareaValue, setTextareaValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleAddNote = () => {
    if (textareaValue !== "") {
      dispatch({
        type: "handleAddNote",
        payload: { textAreaValue: textareaValue, title: inputValue },
      });
      setTextareaValue("");
      setInputValue("");
    } else return textareaValue;
  };

  return (
    <div className="bg-[#4DD0E1] flex flex-col w-[300px] md:w-[25vw] h-[200px] justify-center rounded-2xl shadow-2xl">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="title..."
        className="mx-3 my-2 outline-none border-none"
      />
      <textarea
        className="h-5/10 mx-3 mb-4 outline-none border-none resize-none"
        placeholder="type to add note..."
        onChange={(e) => setTextareaValue(e.target.value)}
        value={textareaValue}
      ></textarea>
      <div className="flex justify-end mr-4">
        <button
          onClick={handleAddNote}
          className="bg-[#252525] text-white w-fit px-4 py-1 rounded-[0.75rem] cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};
