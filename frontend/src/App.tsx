import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ChatPage from "./pages/ChatPage";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <img src="/bg3.jpg" className="-z-10 fixed top-0 h-screen w-screen" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App
