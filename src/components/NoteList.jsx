import { UseNote } from "../Context/MainCotext";
import { FaTrashAlt } from "react-icons/fa";

export const NoteList = () => {
  const { state, dispatch } = UseNote();

  const inputHandler = (value, id) => {
    dispatch({
      type: "handleChangeTitle",
      payload: { id: id, title: value },
    });
  };
  const textareaHandler = (value, id) => {
    dispatch({
      type: "handleChangeNote",
      payload: { id: id, textAreaValue: value },
    });
  };

  return state.map((note) => (
    <div
      key={note.id}
      className="flex flex-col w-[300px] md:w-[25vw] h-[200px] justify-center rounded-2xl shadow-2xl "
      style={{ backgroundColor: note.backGround }}
    >
      <input
        value={note.title}
        onChange={(e) => inputHandler(e.target.value, note.id)}
        className="mx-3 my-2 font-bold outline-none border-none bg-transparent"
      />
      <textarea
        value={note.body}
        onChange={(e) => textareaHandler(e.target.value, note.id)}
        className="h-5/10 mx-3 mb-4 outline-none border-none resize-none bg-transparent" 
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
