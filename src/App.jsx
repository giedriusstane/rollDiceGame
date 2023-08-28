import "./App.css";
import { Route, Routes } from "react-router-dom";
import GamePage from "../pages/GamePage";
import StartPage from "../pages/StartPage";

function App() {
  return (
    <Routes>
      <Route path="/game" element={<GamePage />} />
      <Route path="/" element={<StartPage />} />
    </Routes>
  );
}

export default App;
