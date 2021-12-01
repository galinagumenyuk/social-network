import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";


const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Den' },
        { id: 2, name: 'Roma' },
        { id: 3, name: 'Kate' },
        { id: 4, name: 'Sasha' },
    ];
     let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Sup?' },
        { id: 4, message: 'OK' },
    ];

    let dialogsElements = dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messages.map(message => <Message message={message.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;