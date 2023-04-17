import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodosPage from "./Pages/TodosPage";
import DoneTodoPage from "./Pages/DoneTodoPage";
import OpenTodoPage from "./Pages/OpenTodoPage";
import SingleTodoPage from "./Pages/SingleTodoPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path="/todo/:todoId" element={<SingleTodoPage />} />
        <Route path="/donetodo" element={<DoneTodoPage />} />
        <Route path="/opentodo" element={<OpenTodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
