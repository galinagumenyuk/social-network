import React from "react";
import s from'./Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <span className={s.logo}>Social<span className={s.logoAccent}>App</span> </span>
      </header>
    )
}

export default Header;