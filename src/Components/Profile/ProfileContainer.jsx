import React, { useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";

function ProfileContainer(props) {
    const { userId } = useParams();
    let currUserId = userId||10


    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + currUserId)
            .then((response) => {
                props.setUserProfile(response.data);
            });
    }, [userId]);

    return (
        <div>
            <Profile profile={props.profile} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
