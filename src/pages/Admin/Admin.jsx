import Header from "../../components/Header/Header";
import {Outlet} from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import { ProvedorAdmin } from "../../contextos/ContextoAdmin";
import "./Admin.css";

const Admin = () => {
    document.title="Solo para Admins"; 

    return ( 
        <ProvedorAdmin>
            <Header></Header>
            <div className="dashboard">
                <Aside/>
                
                <div className="dashboard-content">
                    <Outlet></Outlet>
                    
                </div>
            </div>
        </ProvedorAdmin>
    );
}
 
export default Admin;