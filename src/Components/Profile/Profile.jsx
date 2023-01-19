import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from'./Profile.module.css'
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props)=>{

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts ={props.state.posts} newPostText = {props.state.profilePage} dispatch ={props.dispatch} />
        </div>

    );
}

export default Profile;