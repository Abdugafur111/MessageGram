import React from "react";
import s from "./Users.module.css";
import userphoto from "../../assets/images/user.png";

let Users =(props)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 12; i++) {
        pages.push(i);
    }
    return(
        <div>
            <div>
                {pages.map(p=>{
                    return  <span className={props.currentPage === p && s.selectedPage} onClick={()=>{props.setCurrentPage(p)}} >{p}</span>
                })}

            </div>
            {

                props.users.map(u=><div key={u.id}>


                    <span>
                        <div>
                            <img className={s.userPhoto} src={u.photos.small!=null? u.photos.small : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'} alt=""/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={()=>props.unfollow(u.id)}>Unfollow</button>:<button onClick={()=>props.follow(u.id)} >Follow</button>}


                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>


                </div>)
            }
        </div>


    )
}

export default Users