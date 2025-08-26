import { useEffect } from "react";
import { UseTheme } from "../Context/ThemeContext";
import { AddNote } from "./AddNote";
import { NoteList } from "./NoteList";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

export const AppContent = () => {
  const { darkMode, setDarkMode } = UseTheme();
  const notify = () => toast.info("Welcome to Note App", {autoClose: 1500, position: "bottom-left"});

  useEffect(() => {
    notify()
  }, [])

  return (
    <div className="max-w-screen min-h-screen flex justify-center bg-amber-50 text-black dark:bg-[#252525] dark:text-white ">
      <div className="w-9/10">
        <h1 className="text-3xl font-bold my-4">Notes</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="absolute top-4 right-4 md:text-6xl text-4xl">
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-full">
          <AddNote />
          <NoteList />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
