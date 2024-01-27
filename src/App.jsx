import React from 'react'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './index.css'
import Home from "./Home";
import ReadUser from "./ReadUser";
import UpdateUser from "./UpdateUser";



const App = () => {
  return (
  

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/readuser/:id" element={<ReadUser />} />
      <Route path="/updateuser/:id" element={<UpdateUser />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App