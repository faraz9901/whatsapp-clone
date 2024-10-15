import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ChatPage from "./pages/ChatPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App
