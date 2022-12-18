import React from "react";  
import About from './../pages/About';
import Posts from './../pages/Posts';                        
import { Routes, Route  } from "react-router-dom";

const AppRouter = () => {   
                          
                       
    return(
        <Routes>
            <Route path="/info" element={<About/>}/>
            <Route path="/posters" element={<Posts/>}/>
        </Routes>
    );  
};

export default AppRouter;