import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import MainForm from "./pages/MainForm";
import Greeting from "./pages/Greeting";
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainForm />} />
                <Route path="/greeting" element={<Greeting/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;