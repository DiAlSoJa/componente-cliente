import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Aside.css";

const Aside = ({setActualizar}) => {
    const [open,setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(prev=> !prev);
    }
    const cerrarSesion =()=>{
        localStorage.removeItem("x-token");

        setActualizar(prev=>!prev)
    }
    return ( 
        <aside className={`aside ${open? "open":""}`} >
            <div className="title-admin">
                <h2>Admin</h2>
            </div>
            <nav>
                <li className="list-item"><NavLink className="link" to="/ddd/Componente">Componente</NavLink></li>
                <li className="list-item"><NavLink className="link" to="/ddd/categoria">Categorias</NavLink></li>
                <li className="list-item"><NavLink className="link" to="/ddd/admin">Admins</NavLink></li>
            </nav>
            <div className="icono" onClick={handleOpen}>
                {!open
                ?
                    <i className="fas fa-bars"></i>
                :
                    <i className="fas fa-times"></i>
                }
            </div>
            <button className="logout" onClick={cerrarSesion}>
                <i className="fa-regular fa-circle-left"></i> Salir sesion
            </button>
        </aside>
     );
}
 
export default Aside;