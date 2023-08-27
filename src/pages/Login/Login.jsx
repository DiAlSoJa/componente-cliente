import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import Loader from "../../components/Loader/Loader";
import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";

const Login = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading,setLoading] = useState(true);
    const [actualizar,setActualizar] = useState(false);
    
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
                if(data._id){
                    setIsAuthenticated(true);
                    setLoading(false);
                }
                else {
                    setIsAuthenticated(false);
                    localStorage.removeItem("x-token");
                    setLoading(false);

                }
            })
        }else{
            setIsAuthenticated(false);
            setLoading(false);
        }
    },[actualizar]);

    return ( 
        <>
            <Header></Header>
            {loading?
                <Loader></Loader>
            :
            <>
                {isAuthenticated
                ?
                    <Navigate to="/ddd"/>
                :
                    <LoginForm setActualizar={setActualizar}></LoginForm>
                }
            </>
            }
        </>
     );
}
 
export default Login;