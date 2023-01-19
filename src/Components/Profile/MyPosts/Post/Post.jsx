import React from "react";
import classes from'./Post.module.css'

const Post = (props)=>{
    return (
        <div className={classes.item}>
            <img src= {props.image}  />
            {props.message}
            <div>
                <span>like {props.likecount}</span>
            </div>
        </div>
    );
}

export default Post;
