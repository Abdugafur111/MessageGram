import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) =>{
    return(
        <div>
            <div>
            <img src='https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='/>
            </div>
            <div className={s.descriptionBlock}>
                ava + disc
            </div>
        </div>
    );
}
export default ProfileInfo