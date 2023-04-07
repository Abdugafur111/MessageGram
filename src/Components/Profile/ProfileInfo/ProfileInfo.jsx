import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) =>{
    if(!props.profile){
        return <Preloader src={'https://i.pinimg.com/originals/84/e4/a5/84e4a59086383b1cfab40e342fb5e0f5.gif'}/>
    }
    return(
        <div>
            <div>
            <img src='https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt=""/>
                ava + disc
            </div>
        </div>
    );
}
export default ProfileInfo