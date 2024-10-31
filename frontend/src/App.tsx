import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ChatPage from "./pages/ChatPage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useAuth } from "./store/useAuth";

function App() {
  const user = useAuth((state) => state.user)
  const fetchUser = useAuth((state) => state.fetchUser)

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <>
      <img src="/bg3.jpg" className="-z-10 fixed top-0 h-screen w-screen" />
      <Routes>
        <Route path="/" element={!user ? <HomePage /> : <Navigate to={"/chat"} />} />
        <Route path="/chat" element={user ? <ChatPage /> : <Navigate to={"/"} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default App
