import React from "react";
import s from "./Users.module.css";
import userphoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let Users =(props)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 12; i++) {
        pages.push(i);
    }
    return(
        <div>

            {

                props.users.map(u=><div className={s.card} key={u.id}>


                    <span>
                        <div className={s.cardHeader}>
                           <NavLink to={'/profile/'+u.id}> <img className={s.userPhoto} src={u.photos.small!=null? u.photos.small : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'} alt=""/></NavLink>
                        </div>


                    </span>

                    <span className={s.cardBody}>
                       <div>
                            {u.followed ? <button onClick={()=>props.unfollow(u.id)}>Unfollow</button>:<button onClick={()=>props.follow(u.id)} >Follow</button>}
                        </div>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"SJSU"}</div>
                            <div>{"California"}</div>
                        </span>
                    </span>


                </div>)
            }
            <div>
                <div className={s.pagination}>
                    {pages.map(p=>{
                        return  <span className={props.currentPage === p && s.selectedPage} onClick={()=>{props.setCurrentPage(p)}} >{p}</span>
                    })}
                </div>

            </div>
        </div>


    )
}

export default Users