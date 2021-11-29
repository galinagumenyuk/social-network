import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";


const DialogsItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}> <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
}
 
const Message = (props) => {
    return (
        <div className={s.message}>{props.message }</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Den" id="1" />
                <DialogsItem name="Roma" id="2" />
                <DialogsItem name="Kate" id="3" />
                <DialogsItem  name = "Sasha" id = "4"/>
               
            </div>
            <div className={s.messages}>
               <Message message="Hi"/>
                <Message message="Hello" />
                <Message message="What's up?" />
                <Message message="OK"/>
            </div>
        </div>
    )
}
export default Dialogs;