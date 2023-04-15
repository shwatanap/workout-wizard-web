import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/App.css";

import Start from "@/pages/Start";
import InputPage from "./pages/InputPage";
import OutputPage from "./pages/OutputPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/output" element={<OutputPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
