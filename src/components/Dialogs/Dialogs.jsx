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
    let dialogsData = [
        { id: 1, name: 'Den' },
        { id: 2, name: 'Roma' },
        { id: 3, name: 'Kate' },
        {id: 4, name: 'Sasha'},
    ]
    
    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Sup?' },
        { id: 4, message: 'OK' },
    ]
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogsItem  name={dialogsData[3].name} id={dialogsData[3].id}/>
               
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    )
}
export default Dialogs;