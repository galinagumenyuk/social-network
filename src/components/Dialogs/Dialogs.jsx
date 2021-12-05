import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.wrapper}>
        <textarea className={s.textarea} ref={newMessage}></textarea>
        <button className={s.button} onClick={addMessage}>
          send
        </button>
      </div>
    </div>
  );
};
export default Dialogs;
