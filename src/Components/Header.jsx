import * as React from 'react';
import Box from '@mui/material/Box';

import "./Header.css"

function Header() {


  return (
    <Box id = "header">
        <strong className = "text-black">With
            <i className="fa-solid fa-face-smile fa-shake fa-xl mx-2" style={{color: "#4348e2"}}></i>
            by Abhay Dixit
        </strong>
        
        <Box id = "personal-links">
            <a className = "mb-6 mx-1" href = "https://www.linkedin.com/in/abhayd08" target = "_blank" rel = "noreferrer">
                <i className="fa-brands fa-linkedin fa-2xl mb-6" style={{color: "#0a66c2"}}></i>
            </a>
            <a className = "mb-6 mx-1" href = "https://www.github.com/abhayd08" target = "_blank" rel = "noreferrer">
                <i className="fa-brands fa-square-github fa-2xl" style={{color: "#1f3251"}}></i>
            </a>
            <a className = "mb-6 mx-1" href = "https://www.twitter.com/abhayd_8" target = "_blank" rel = "noreferrer">
                <i className="fa-brands fa-square-twitter fa-2xl" style={{color: "#0a66c2"}}></i>
            </a>
            <a className = "mb-6 mx-1" href = "https://instagram.com/abhayd_08?igshid=ZDc4ODBmNjlmNQ==" target = "_blank" rel = "noreferrer">
                <i className="fa-brands fa-instagram fa-2xl" style={{color: "#e61e89"}}></i>
            </a>
        </Box>
    </Box>
  );
}
export default Header;
