import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let addPost = () =>{
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) =>{
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts updateNewPostText = {onPostChange} addPost = {addPost} posts = {props.store.getState().profilePage.posts} newPostText = {props.store.getState().profilePage.newPostText}/>
    );
}

export default MyPostsContainer;