import React from "react";
import s from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <a href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11">
            Profile
          </a>
        </div>
        <div className={s.item}>
          <a href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11">
            Messages
          </a>
        </div>
        <div className={s.item}>
          <a href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11">
            News
          </a>
        </div>
        <div className={s.item}>
          <a href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11">
            Music
          </a>
        </div>
        <div className={s.item}>
          <a href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=11">
            Settings
          </a>
        </div>
      </nav>
    )
}

export default NavBar;