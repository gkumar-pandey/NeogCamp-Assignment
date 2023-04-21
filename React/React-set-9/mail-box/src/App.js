import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import InboxPage from "./Pages/InboxPage";
import SendBoxPage from "./Pages/SendBoxPage";
import ErrorPage from "./Components/ErrorPage";
import EmailDetailPage from "./Pages/EmailDetailPage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/sentbox" element={<SendBoxPage />} />
        <Route path="/inbox/email/:emailId" element={<EmailDetailPage />} />
        <Route path="/sentbox/email/:emailId" element={<EmailDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
