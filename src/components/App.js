import Home from './Home';
import Header from './Header';
import AnimatedNumber from './AnimatedNumber';
import Login from './Login';
import { useState } from 'react';
import { Routes, Route, useNavigate, Navigate} from "react-router-dom";

const App = () => {
    const [username, setUsername] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [data, setData] = useState(null);

    const navigate = useNavigate();
    const config = {
        username : username,
        setUsername : setUsername,
        isLogin : isLogin,
        setIsLogin : setIsLogin,
        navigate: navigate,

        data: data,
        setData : setData,
    }

    return (
        <div className = "App">
           
            <Header {...config}/>
            <Routes>
                <Route path = "/" element = {isLogin ? <Home {...config}/> : <Navigate to= "/login"/>} /> 
                <Route path = "/login" element = {<Login {...config}/>} />
            </Routes>
                
          
        </div>
    );
}

export default App;