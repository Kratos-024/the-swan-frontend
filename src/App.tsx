import { DarkModeProvider, useDarkMode } from "@rbnd/react-dark-mode";
import "./index.css";
import { HomePage } from "./pages/HomePage";
import { ChatPage } from "./pages/ChatPage";
function App() {
  return (
    <DarkModeProvider>
      <MainApp />
    </DarkModeProvider>
  );
}

function MainApp() {
  const { mode, setMode } = useDarkMode();

  const darkModeHandler = () => {
    setMode(mode === "dark" ? "light" : "dark");
    console.log("Current mode:", mode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      <ChatPage />
    </div>
  );
}

export default App;
