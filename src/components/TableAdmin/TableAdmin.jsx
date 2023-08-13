import React, { useState, useEffect,useContext } from 'react';
import EliminarAdmin from '../EliminarAdmin/EliminarAdmin';
import CrearAdmin from '../CrearAdmin/CrearAdmin';
import { ContextoAdmin } from '../../contextos/ContextoAdmin';

import "../../styles/EliminarEditar.css";
const TableAdmin = () => {
    const [admins,setAdmins]= useState([]);
    const [eliminar,setEliminar] = useState(false);
    const [crear,setCrear] = useState(false);
    const [adminEliminar,setAdminEliminar]= useState({});

    const {actualizar}= useContext(ContextoAdmin);
    useEffect(()=>{
        fetch("http://localhost:8000/admin",{
            headers:{
                "x-token":localStorage.getItem("x-token")
            }
        })
        .then(res=>res.json())
        .then(datos=>{
            if(datos.admins) setAdmins(datos.admins);

        })
        .catch(error=> console.log(error));
    },[actualizar]);
    return (  
        <>
        {(eliminar)?  <EliminarAdmin setEliminar={setEliminar} eliminar={adminEliminar} /> : ""}
        {(crear)?  <CrearAdmin setCrear={setCrear}/> : ""}
        <h2>Admin</h2>
            <div className='btn-crear'>
                <button onClick={()=>setCrear(true)}>Crear +</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="id">id</th>
                        <th className="correo">Correo</th>
                        <th className="config">edit</th>
                        <th className="config">delete</th>
                    </tr>
                </thead>
                    <tbody>
                        {admins.map((admin)=>{

                           return ( 
                            <tr key={admin.uid} className="admin">
                                <td>{admin.uid}</td>
                                <td className='correo'>{admin.correo}</td>
                                <td className="editar"><i className="fas fa-edit"></i></td>
                                <td className="eliminar"><i className="fas fa-trash" onClick={()=>{setEliminar(true); setAdminEliminar(admin);}}></i></td>
                            </tr>
                            ); 
                        })} 

                      
                    </tbody>

            </table>
        </>
    );
}
 
export default TableAdmin;