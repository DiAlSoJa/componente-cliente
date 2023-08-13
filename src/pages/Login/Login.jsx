import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import React, { useState, useEffect } from 'react';

const Login = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        const token = localStorage.getItem("x-token");
        if(token){
            fetch("http://localhost:8000/admin/me",{
                headers:{
                    "Content-Type": "application/json",
                    "x-token": token
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data._id){
                    setIsAuthenticated(true);
                    setLoading(true);
                }
                else {
                    setIsAuthenticated(false);
                    localStorage.removeItem("x-token");
                    setLoading(true);

                }
            })
        }else{
            setIsAuthenticated(false);
            setLoading(true);
        }
    },[]);

    return ( 
        <>
            <Header></Header>
            <LoginForm></LoginForm>
        </>
     );
}
 
export default Login;