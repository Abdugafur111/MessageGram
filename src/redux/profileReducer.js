const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';


let initialState = {
    posts : [
        {id: 1, message: "Hi, How are you?", image : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', likecount: '10'},
        {id: 2, message: "Hi, thanks I am fine", image : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', likecount: '12'},
        {id: 3, message: "How about you?", image : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png', likecount: '13'}
    ],
    newPostText: 'Hello',
    profile:null,
}

const profilerReducer=(state = initialState,action)=>{
    switch(action.type){
        case ADD_POST:{
            let newPost ={
                id:4,
                message:state.newPostText,
                image : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png',
                likecount:'0'
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ' ';
            return stateCopy
        }
        case UPDATE_NEW_POST:{
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        case SET_USERS_PROFILE:{
            let stateCopy = {...state,profile:action.profile}
            return stateCopy
        }
        default:
            return state

    }
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

export const setUserProfile = (profile) =>{

    return {
        type: SET_USERS_PROFILE,
        profile:profile
    }
}