/*import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Createuser from './Createuser';
import Updateuser from './Updateuser';
import User from './User';
//import "./App.css";

const Apps = () => {
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/create" element={<Createuser />} />
                <Route path="/update" element={<Updateuser />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Apps*/
import React from "react";

import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

import Updateuser from "./Updateuser";
import User from "./User";
import Createuser from "./Createuser";


const Apps = () => {
    return (
        <div>
            {/* <h1>hello apps</h1> */}
            <Router>
                <Routes>
                    <Route path="/" element={<User/>} />
                    <Route path="/create" element={<Createuser/>} />  
                    <Route path="/update" element={<Updateuser/>} />
                </Routes>
            </Router>    
        </div>
    );
};

export default Apps;
