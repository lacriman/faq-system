import React from "react";
import './Header.css';
import headerImg from '../assets/header_logo.png';

function Header() {
   return (
      <img src={headerImg} alt="" className="header-img" />
   );
}

export default Header;