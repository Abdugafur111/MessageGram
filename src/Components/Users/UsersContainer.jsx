import React from "react";
import {connect} from "react-redux";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";


class UserAPIComponent extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {
                this.props.toggleIsFetching(false)

                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            }
        )
    }


    setCurrentPage=(page)=>{
        this.props.setCurrentPage(page)
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)

            this.props.setUsers(response.data.items)


        })
    }

    render() {
        return <>
            {this.props.isFetching? <img src='https://i.pinimg.com/originals/84/e4/a5/84e4a59086383b1cfab40e342fb5e0f5.gif'/>:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      setCurrentPage = {this.setCurrentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow = {this.props.unfollow}

        />
</>

    }}


let mapStateToProps = (state) =>{
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        follow:(userID)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(page)=>{dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount:(totalCount)=>{dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching:(isFetching)=>{dispatch(setIsFetchingAC(isFetching))
        },


    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserAPIComponent);