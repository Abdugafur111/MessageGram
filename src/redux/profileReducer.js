const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {
    posts : [
        {id: 1, message: "Hi, How are you?", image : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', likecount: '10'},
        {id: 2, message: "Hi, thanks I am fine", image : 'https://cdn-icons-png.flaticon.com/512/147/147142.png', likecount: '12'},
        {id: 3, message: "How about you?", image : 'https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small/man-avatar-icon-free-vector.jpg', likecount: '13'}
    ],
    newPostText: 'Hello'
}

const profilerReducer=(state = initialState,action)=>{
    if(action.type === ADD_POST){
        let newPost ={
            id:4,
            message:state.newPostText,
            image : 'https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small/man-avatar-icon-free-vector.jpg',
            likecount:'0'
        }
        state.posts.push(newPost);
        state.newPostText = ' ';
    }else if(action.type === UPDATE_NEW_POST){
        state.newPostText = action.newText
    }
    return state
}
export default profilerReducer


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