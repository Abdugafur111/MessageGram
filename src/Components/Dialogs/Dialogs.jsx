import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {newMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) =>{
    let state = props.dialogsPage;


    let dialogsElements = state.dialogsData.map(people =>(<DialogItem name={people.name} id = {people.id}/> ))


    let messageElements = state.messageData.map(message => (<Message message={message.message}/> ))

    let newMessageBody = state.newMessageBody

    let message = React.createRef();

    let onNewMessageChange =() =>{
        let body = message.current.value
        props.onNewMessageChanges(body)
    }

    let onSendButtonClick =()=>{
        props.onSendButtonClick()
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
                            ref={message}
                            value = {newMessageBody} name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                        <div>
                            <button onClick={onSendButtonClick}>Send</button>
                        </div>
                </div>


        </div>
    );
}
export default Dialogs;