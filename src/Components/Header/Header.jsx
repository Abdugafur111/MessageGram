import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props)=>{
    return (

        <header className={classes.header}>
            <img src="https://pbs.twimg.com/profile_images/858025245453582336/YcmC2QmK_400x400.jpg" />
            <div className={classes.loginBlock}>
                {props.login}

            </div>
        </header>

    );
}

export default Header;