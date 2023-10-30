import Login from "./components/Login";
import Forget from "./components/Forget";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import Verification from "./components/Verification"
import MakePayment from "./components/MakePayment"
import Enrollment from "./components/Enrollment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path="/forgot" element={<Forget/>}/>
        <Route path="/verification" element={<Verification/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/feespayment" element={<MakePayment/>}/>
        <Route path="/enrollment" element={<Enrollment/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
