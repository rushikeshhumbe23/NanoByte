import React from 'react'
import {Routes , Route} from "react-router-dom";
import Home from '../pages/Home';
import Interview from '../pages/Interview';

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/interview" element={<Interview/>} />
    </Routes>
  )
}

export default MainRoutes