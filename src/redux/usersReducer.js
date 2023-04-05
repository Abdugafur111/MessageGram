const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let initialState = {
    users:[],
    totalUsersCount:0,
    pageSize:8,
    currentPage:1,
    isFetching:false
}

const usersReducer=(state = initialState,action)=>{
    switch(action.type){
        case FOLLOW:
             return {
                 ...state,
                users:state.users.map(u=>{
                    if(action.userID === u.id){

                        return {...u,followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {...state,
                users:state.users.map(u=>{
                    if(action.userID === u.id){

                        return {...u,followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:{
            return {
                ...state,users:[...action.users]
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT:{
            return {
                ...state,totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING:{
            return {
                ...state, isFetching:action.isFetching
            }
        }

        default:
            return state

    }
}

export const follow =(userID)=>{
    return {
        type:FOLLOW,
        userID:userID
    }
}


export const unfollow =(userID)=>{
    return {
        type:UNFOLLOW,
        userID:userID

    }
}

export const setUsers=(users)=>{
    return{
        type:SET_USERS,
        users:users

    }
}

export const setCurrentPage =(page)=>{
    return {
        type:SET_CURRENT_PAGE,
        currentPage:page
    }
}

export const setUsersTotalCount =(totalUsersCount)=>{
    return {
        type:SET_TOTAL_USERS_COUNT,
        count:totalUsersCount
    }
}

export const toggleIsFetching =(isFetching)=>{
    return {
        type:TOGGLE_IS_FETCHING,
        isFetching:isFetching
    }
}

export default usersReducer


