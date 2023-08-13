import React, { useState, useEffect ,useContext} from 'react';
import EliminarCategoria from "../EliminarCategoria/EliminarCategoria";
import CrearCategoria from "../CrearCategoria/CrearCategoria";
import { ContextoAdmin } from '../../contextos/ContextoAdmin';

const TableCategoria = () => {
    const [categorias,setCategorias] = useState([]);
    const [categoriaEliminar,setCategoriaEliminar]= useState({});
    const [eliminar,setEliminar] = useState(false);
    const [crear,setCrear] = useState(false);
    const {actualizar}= useContext(ContextoAdmin);
    
    useEffect(()=>{
        fetch("http://localhost:8000/categoria",{
            headers:{
                "x-token":localStorage.getItem("x-token")
            }
        })
        .then(res=>res.json())
        .then(datos=>{
            if(datos.categorias) setCategorias(datos.categorias);

        })
        .catch(error=> console.log(error));
    },[actualizar]);

    return ( 
        <>
        {(crear)? <CrearCategoria setCrear={setCrear}/> : ""}
        {(eliminar)?  <EliminarCategoria setEliminar={setEliminar} eliminar={categoriaEliminar} /> : ""}
        <h2>Categorias</h2>
            <div className='btn-crear'>
                <button onClick={()=>setCrear(true)}>Crear +</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="id">id</th>
                        <th className="nombre">Nombre</th>
                        <th className="config">edit</th>
                        <th className="config">delete</th>
                    </tr>
                </thead>
                    <tbody>
                    {categorias.map((categoria)=>{
                           return (
                            <tr key={categoria._id}>
                                <td>{categoria._id}</td>
                                <td className="nombre">{categoria.nombre}</td>
                                <td className="editar"><i className="fas fa-edit"></i></td>
                                <td className="eliminar"><i className="fas fa-trash" onClick={()=> {setEliminar(true); setCategoriaEliminar({id: categoria._id,nombre: categoria.nombre})}}></i></td>
                            </tr>

                           );
                       })}
                      
                    </tbody>

            </table>
        </>
     );
}
 
export default TableCategoria;