import React, { useState,useContext} from 'react';
import { ContextoAdmin } from '../../contextos/ContextoAdmin';


const EditAdmin = ({setEditar,admin}) => {
    const [nuevoUserName,setNuevoUserName] = useState(admin.username);
    const [nuevoCorreo,setNuevoCorreo] = useState(admin.correo);

    const nuevoUserNameOnChange= (e)=>setNuevoUserName(e.target.value);
    const nuevoCorreoOnChange= (e)=>setNuevoCorreo(e.target.value);

    const {setActualizar} = useContext(ContextoAdmin);
    const editarUserName= (e,id="123")=>{
        e.preventDefault();
        fetch(`http://localhost:8000/admin/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "x-token": localStorage.getItem("x-token")
            },
            body: JSON.stringify({username:nuevoUserName,correo:nuevoCorreo})
        }).then(res=> res.json()).then(datos=>{
            setEditar(false);
            setActualizar(prev=>!prev);
        });

    }
    return ( 
        <>
            <div className="editar-form">
                
                <form onSubmit={(e)=>editarUserName(e,admin.uid)}>
                    <h3>Editar admin</h3>
                    <div className="form-thing">
                        <label>UserName</label>
                        <input 
                            type="text"
                            value={nuevoUserName}
                            onChange={nuevoUserNameOnChange}
                            required
                            />
                    </div>
                    <div className="form-thing">
                        <label>Correo</label>
                        <input 
                            type="email"
                            value={nuevoCorreo}
                            onChange={nuevoCorreoOnChange}
                            required
                            />
                    </div>
                    <div className="form-thing">
                        <button type="submit">Guardar cambios</button>
                    </div>
                </form>
                <div className="cerrar-editar">
                    <i className="fa-solid fa-xmark i" onClick={()=>{setEditar(false)}}></i>
                </div>
            </div>
        </>
     );
}
 
export default EditAdmin;