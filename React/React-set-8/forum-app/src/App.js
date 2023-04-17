import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import QuestionPage from "./Pages/QuestionPage";
import AnswerPage from "./Pages/AnswerPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/answer/:ansId" element={<AnswerPage />} />
      </Routes>
    </div>
  );
}

export default App;
