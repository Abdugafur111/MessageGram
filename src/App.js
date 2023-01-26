import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route,Routes} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
        <div className='app-wrapper-content'>

            <Routes>
            <Route  path = {"dialogs/*"} element ={<Dialogs   store = {props.store} />} />
            <Route  path = {'profile/*'} element ={<Profile state = {props.state.profilePage} dispatch={props.dispatch}/>} />
            </Routes>

        </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
