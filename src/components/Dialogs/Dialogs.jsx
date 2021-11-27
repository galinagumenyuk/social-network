import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' +s.active}> Dima</div>
                <div className={s.dialog}> Petya</div>
                <div className={s.dialog}> Sasha</div>
                <div className={s.dialog}> Masha</div>
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