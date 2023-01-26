import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from'./Profile.module.css'
import Post from "./MyPosts/Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props)=>{

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store ={props.store}  />
        </div>

    );
}

export default Profile;