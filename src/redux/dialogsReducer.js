const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {

        messageData : [
            {id:1,message:'Hi'},
            {id:2,message:'How is your It Kamas'},
            {id:3,message:'Yo'},
            {id:4,message:'Yo'},{id:5,message:'Yo'}
        ],
        dialogsData : [
            {id:1, name: 'Dimych'},
            {id:2, name: 'Andrey'},
            {id:3, name: 'Sveta'},
            {id:4, name: 'Sasha'},
            {id:5, name: 'Valera'},
            {id:6, name: 'Viktor'}
        ],
        newMessageBody:''
}

const dialogsReducer=(state = initialState,action)=> {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }

        case SEND_MESSAGE:{
            let stateCopy = {...state}
            stateCopy.messageData = [...state.messageData]

            let body = state.newMessageBody;

            let bodyObj = {
                id: 5,
                message: body
            }
            stateCopy.messageData.push(bodyObj)
            stateCopy.newMessageBody = ''
            return stateCopy
        }
        default:
            return state
    }
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