import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = (props) => {
    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
        <div className='app-wrapper-content'>
            <Routes>
            <Route  path = {"dialogs/*"} element ={<DialogsContainer />} />
            <Route  path = {'profile/:userId?/*'} element ={<ProfileContainer />} />
            <Route  path = {'users/*'} element ={<UsersContainer/>} />
            </Routes>
        </div>
        </div>

    );
}

export default App;
