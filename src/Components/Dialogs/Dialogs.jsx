import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {newMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/state";


const Dialogs = (props) =>{

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(people =>(<DialogItem name={people.name} id = {people.id}/> ))


    let messageElements = state.messageData.map(message => (<Message message={message.message}/> ))

    let newMessageBody = state.newMessageBody

    let onNewMessageChange =(e) =>{
        let body = e.target.value
        props.store.dispatch(newMessageBodyActionCreator(body))
    }

    let onSendButtonClick =()=>{
        props.store.dispatch(sendMessageActionCreator())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}


            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>

                        <textarea
                            onChange={onNewMessageChange}
                            value = {newMessageBody} name="" id="" cols="30" rows="10"></textarea>
                        <div>
                            <button onClick={onSendButtonClick}>Send</button>
                        </div>
                    </>
            </div>

        </div>
    );
}
export default Dialogs;