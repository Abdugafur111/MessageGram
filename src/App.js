import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
        <div className='app-wrapper-content'>
            <Routes>
            <Route  path = {"dialogs/*"} element ={<DialogsContainer />} />
            <Route  path = {'profileContainer/*'} element ={<ProfileContainer />} />
            <Route  path = {'users/*'} element ={<UsersContainer/>} />
            </Routes>
        </div>
        </div>

    );
}

export default App;
