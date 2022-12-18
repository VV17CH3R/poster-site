import React from "react";  
import { Link } from 'react-router-dom';                     

const NavBar = () => {   
                          
                       
    return(
        <div className='navBar'>
            <div className='navBar__items'>
                <Link className='navBar__a' to="/info">
                     О проекте
                </Link>
                <Link className='navBar__a' to="/posters">
                     Заметки
                </Link>
            </div>
        </div>
    );  
};

export default NavBar;