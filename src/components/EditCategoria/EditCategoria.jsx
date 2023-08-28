import React, { useContext, useState } from 'react';
import { ContextoAdmin } from '../../contextos/ContextoAdmin';


const EditCategoria = ({setEditar,categoria,url}) => {
    const [nuevoNombre,setNuevoNombre] = useState(categoria.nombre);

    const nuevoNombreOnChange= (e)=>setNuevoNombre(e.target.value);

    const {setActualizar} = useContext(ContextoAdmin);

    const editarNombre= (e,id="123")=>{
        e.preventDefault();
        fetch(`${url}categoria/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "x-token": localStorage.getItem("x-token")
            },
            body: JSON.stringify({nombre:nuevoNombre.toUpperCase()})
        }).then(res=> res.json()).then(datos=>{
       
            setEditar(false);
            setActualizar(prev=>!prev);
        });

        
    }

    return ( 
        <>
            <div className="editar-form">
                
                <form onSubmit={(e)=>editarNombre(e,categoria._id)}>
                    <h3>Editar Categoria</h3>
                    <div className="form-thing">
                        <label>Nombre</label>
                        <input 
                        type="text"
                        required
                        value={nuevoNombre}
                        onChange={nuevoNombreOnChange}
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
export default EditCategoria;