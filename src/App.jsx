import Login from "./components/Login";
import Forget from "./components/Forget";
import Reset from "./components/Reset";
import Verification from "./components/Verification"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path="/forgot" element={<Forget/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/verification" element={<Verification/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
