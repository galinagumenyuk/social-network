import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' +s.active}> <NavLink to="/dialogs/1"> Dima </NavLink></div>
                <div className={s.dialog}> <NavLink to="/dialogs/2"> Petya </NavLink></div>
                <div className={s.dialog}> <NavLink to="/dialogs/3"> Sasha </NavLink></div>
                <div className={s.dialog}> <NavLink to="/dialogs/4"> Masha </NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>What's up</div>
                <div className={s.message}>OK</div>
            </div>
        </div>
    )
}
export default Dialogs;