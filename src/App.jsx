import "./App.css";
import { AppContent } from "./components/AppContent";
import { MainContextProvider } from "./Context/MainCotext";

function App() {

  return (
      <MainContextProvider>
          <AppContent />
      </MainContextProvider>
  );
}

export default App;
