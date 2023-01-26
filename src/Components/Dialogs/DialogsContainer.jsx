import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {newMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) =>{

    let state = props.store.getState().dialogsPage;




    let onNewMessageChange =(body) =>{
        props.store.dispatch(newMessageBodyActionCreator(body))
    }

    let onSendButtonClick =()=>{
        props.store.dispatch(sendMessageActionCreator())
    }

    return (
        <Dialogs dialogsPage = {state}  onNewMessageChanges={onNewMessageChange} onSendButtonClick={onSendButtonClick} />
    );
}
export default DialogsContainer;