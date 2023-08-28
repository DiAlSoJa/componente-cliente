import Header from "../../components/Header/Header";
import {Navigate, Outlet} from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import { ProvedorAdmin } from "../../contextos/ContextoAdmin";
import "./Admin.css";
import Laoder from "../../components/Loader/Loader";
import React, { useState ,useEffect} from 'react';

const Admin = ({url}) => {
    document.title="Solo para Admins"; 

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading,setLoading] = useState(true);
    
    const [actualizar,setActualizar]=useState(false);

    useEffect(()=>{
        const token = localStorage.getItem("x-token");
        if(token){
            fetch(url+"admin/me",{
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
    },[actualizar,url]);

    return ( 
        <ProvedorAdmin>
            <Header></Header>
            {loading?
                <Laoder/>
            :  
            <> {
                (isAuthenticated)?
                <div className="dashboard">
                        <Aside setActualizar={setActualizar}/>
                        
                        <div className="dashboard-content">
                            <Outlet></Outlet>
                            
                        </div>
                    </div>
                :
                    <Navigate to="/login"/>
            }
            </>
            }

        </ProvedorAdmin>
    );
}
 
export default Admin;