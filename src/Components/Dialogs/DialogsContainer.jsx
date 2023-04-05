import React from "react";
import {newMessageBodyActionCreator, sendMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () =>{
//     return (
//         <StoreContext.Consumer>{
//
//             (store) => {
//                 let state = store.getState().dialogsPage;
//
//                 let onNewMessageChange =(body) =>{
//                     store.dispatch(newMessageBodyActionCreator(body))
//                 }
//
//                 let onSendButtonClick =()=>{
//                     store.dispatch(sendMessageActionCreator())
//                 }
//                 return <Dialogs dialogsPage={state} onNewMessageChanges={onNewMessageChange}
//                                 onSendButtonClick={onSendButtonClick}/>
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) =>{
    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        onNewMessageChanges:(body)=>{dispatch(newMessageBodyActionCreator(body))},
        onSendButtonClick:()=>{dispatch(sendMessageActionCreator())}
    }
}
let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);




export default DialogsContainer;