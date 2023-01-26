import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {
    let postsElements = props.posts.map(post=>(<Post message = {post.message} likecount = {post.likecount} image = {post.image}/>))

    let addPostElement = React.createRef();

    let addPost = () =>{
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () =>{
        let text = addPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={classes.postBlock}>
            <h2>Mypost</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={addPostElement} value ={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;