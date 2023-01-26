const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profilerReducer=(state,action)=>{
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