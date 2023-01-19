const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store ={
     _state : {
        profilePage:{
            posts : [
                {id: 1, message: "Hi, How are you?", image : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', likecount: '10'},
                {id: 2, message: "Hi, thanks I am fine", image : 'https://cdn-icons-png.flaticon.com/512/147/147142.png', likecount: '12'},
                {id: 3, message: "How about you?", image : 'https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small/man-avatar-icon-free-vector.jpg', likecount: '13'}
            ],
            newPostText: 'Hello'

        },

        dialogsPage:{
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
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
      console.log("State was changed")
    },
    subscribe(observer){
        this._callSubscriber = observer
    },

    _addPost (){
        let newPost ={
            id:4,
            message:this._state.profilePage.newPostText,
            image : 'https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small/man-avatar-icon-free-vector.jpg',
            likecount:'0'
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ' ';
        this._callSubscriber(this._state)
    },

    _updatedPostText(updatedNewText){
        this._state.profilePage.newPostText = updatedNewText
        this._callSubscriber(this._state)
    },
    dispatch(action){
         if(action.type === ADD_POST){
             let newPost ={
                 id:4,
                 message:this._state.profilePage.newPostText,
                 image : 'https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small/man-avatar-icon-free-vector.jpg',
                 likecount:'0'
             }
             this._state.profilePage.posts.push(newPost);
             this._state.profilePage.newPostText = ' ';
             this._callSubscriber(this._state)
         }else if(action.type === UPDATE_NEW_POST){
             this._state.profilePage.newPostText = action.newText
             this._callSubscriber(this._state)
         }else if(action.type ===  UPDATE_NEW_MESSAGE_BODY ){
             this.state.dialogsPage.newMessageBody = action.body
             this._callSubscriber(this._state)
         }else if(action.type === SEND_MESSAGE){
             let body =  this.state.dialogsPage.newMessageBody;
             let bodyObj = {
                 id:5,
                 message:body
             }
             this._state.dialogsPage.messageData.push(bodyObj)
             this.state.dialogsPage.newMessageBody = ''
             this._callSubscriber(this._state)
         }
    }
}

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



export const addPostActionCreator = () =>{
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) =>{

    return {
        type: UPDATE_NEW_POST,
        newText:text
    }
}



export default store