import Home from './Home';
import Header from './Header';
import AnimatedNumber from './AnimatedNumber';
import Login from './Login';
import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate} from "react-router-dom";
import Register from './register';

const App = () => {
    const [username, setUsername] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [data, setData] = useState(null);

    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLogin(false);
    }

    const config = {
        username : username,
        setUsername : setUsername,
        isLogin : isLogin,
        setIsLogin : setIsLogin,
        navigate: navigate,

        data: data,
        setData : setData,

        handleLogout: handleLogout
    }

    return (
        <div className = "App"> 
            <Header {...config}/>
            <Routes>
                <Route path = "/" element = {isLogin ? <Home {...config}/> : <Navigate to= "/login"/>} /> 
                <Route path = "/login" element = {<Login {...config}/>} />
                <Route path = "/register" element = {<Register navigate = {navigate}/>} />
            </Routes>
                
          
        </div>
    );
}

export default App;