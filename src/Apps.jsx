<<<<<<< HEAD

=======
>>>>>>> 66c2a04144d4d4fd6197933f22c58f71656583d9
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
                    <Route path="/update/:id" element={<Updateuser/>} />
                
                </Routes>
            </Router>    
        </div>
    );
};

export default Apps;

