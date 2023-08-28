import React, { useState, useEffect,useContext } from 'react';
import EliminarAdmin from '../EliminarAdmin/EliminarAdmin';
import CrearAdmin from '../CrearAdmin/CrearAdmin';
import { ContextoAdmin } from '../../contextos/ContextoAdmin';

import "../../styles/EliminarEditar.css";
import EditAdmin from '../EditAdmin/EditAdmin';
const TableAdmin = ({url}) => {
    const [admins,setAdmins]= useState([]);
    const [eliminar,setEliminar] = useState(false);
    const [crear,setCrear] = useState(false);
    const [editar,setEditar]=useState(false);
    const [adminEliminar,setAdminEliminar]= useState({});
    const [adminEditar,setAdminEditar] =useState({})

    const {actualizar}= useContext(ContextoAdmin);
    useEffect(()=>{
        fetch(url +"admin",{
            headers:{
                "x-token":localStorage.getItem("x-token")
            }
        })
        .then(res=>res.json())
        .then(datos=>{
            if(datos.admins) setAdmins(datos.admins);

        })
        .catch(error=> console.log(error));
    },[actualizar,url]);
    return (  
        <>
        {(eliminar)?  <EliminarAdmin setEliminar={setEliminar} eliminar={adminEliminar} url={url}/> : ""}
        {(crear)?  <CrearAdmin setCrear={setCrear} url={url}/> : ""}
        {(editar)? <EditAdmin admin={adminEditar} setEditar={setEditar} url={url}/>:""}
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
                                <td className="editar" ><i className="fas fa-edit" onClick={()=>{setEditar(true); setAdminEditar(admin)}}></i></td>
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