const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer=(state,action)=>{
    if(action.type ===  UPDATE_NEW_MESSAGE_BODY ){
        state.newMessageBody = action.body
    }else if(action.type === SEND_MESSAGE){
        let body =  state.newMessageBody;
        let bodyObj = {
            id:5,
            message:body
        }
        state.messageData.push(bodyObj)
        state.newMessageBody = ''
    }
    return state
}

export default dialogsReducer


export const newMessageBodyActionCreator =(newBody)=>{
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: newBody
    }
}

export const sendMessageActionCreator = () =>{
    return{
        type:SEND_MESSAGE
    }
}