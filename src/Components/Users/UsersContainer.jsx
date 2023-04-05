import React from "react";
import {connect} from "react-redux";
import MyPosts from "../Profile/MyPosts/MyPosts";
import {
    follow,
    setCurrentPage,
    toggleIsFetching,
    setUsers,
    setUsersTotalCount,
    unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


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
          <div>  {this.props.isFetching? <Preloader src={'https://i.pinimg.com/originals/84/e4/a5/84e4a59086383b1cfab40e342fb5e0f5.gif'}/> :<Users totalUsersCount={this.props.totalUsersCount}
                                                                                                                                                   pageSize = {this.props.pageSize}
                                                                                                                                                   currentPage = {this.props.currentPage}
                                                                                                                                                   setCurrentPage = {this.setCurrentPage}
                                                                                                                                                   users={this.props.users}
                                                                                                                                                   follow={this.props.follow}
                                                                                                                                                   unfollow = {this.props.unfollow}

          />}</div>

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


export default connect(mapStateToProps,{
    follow,unfollow,setUsers,setCurrentPage,setUsersTotalCount,toggleIsFetching
    })(UserAPIComponent);


/*
* import axios from 'axios';

componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://dummyapi.io/data/v1/user?limit=10`, {
        headers: {
            'app-id': '642d902092a5b24411ebc33e'
        }
    }).then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.data);
    }).catch(error => {
        console.error(error);
    });
}

* */