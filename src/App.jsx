import "./App.css";
import { AddNote } from "./components/AddNote";
import { NoteList } from "./components/NoteList";
import { ContextProvider } from "./Context/Cotext";

function App() {
  return (
    <ContextProvider>
      <div className="max-w-screen min-h-screen flex justify-center">
        <div className="w-9/10">
          <h1 className="text-3xl font-bold my-4">Notes</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-full">
            <AddNote />
            <NoteList />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
