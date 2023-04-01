import React from "react"
import Login from "./component/Login"
import NewRegister from "./component/NewRegister"
import Forgetpassword from "./component/Forgetpassword"
import Dashbord from "./component/Dashbord"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/reg" element={<NewRegister/>}></Route>
            <Route path="/forget" element={<Forgetpassword/>}></Route>
            <Route path="/dashbord" element={<Dashbord/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App