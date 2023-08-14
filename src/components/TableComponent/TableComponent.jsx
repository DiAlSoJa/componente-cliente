import React, { useState, useEffect,useContext} from 'react';
import { ContextoAdmin } from '../../contextos/ContextoAdmin';
import CrearComponente from '../CrearComponente/CrearComponente';
import EliminarComponente from "../EliminarComponente/EliminarComponente";
import EditComponente from '../EditComponente/EditComponente';

const TableComponent = () => {
    const [componentes,setComponentes] = useState([]);
    const [eliminar,setEliminar] = useState(false);
    const [componeteEliminar,setCompoEliminar] = useState({});
    const [componeteEditar,setCompoEditar] = useState({});
    const [categorias,setCategorias]=useState([]);
    const [crear,setCrear] = useState(false);
    const [editar,setEditar] =useState(false);

    const {actualizar}= useContext(ContextoAdmin);

    useEffect(()=>{
        fetch("http://localhost:8000/componente",{
            headers:{
                "x-token":localStorage.getItem("x-token"),
            }
        })
        .then(res=>res.json())
        .then(datos=>{
            if(datos.componentes) setComponentes(datos.componentes);

        })
        .catch(error=> console.log(error));

        fetch(`http://localhost:8000/categoria`).then(res=> res.json()).then(data=>{
            setCategorias(data.categorias);
            // setLoader(false);
            // console.log(data);
        }).catch(e=>console.log(e));
    },[actualizar]);
    return ( 
        <>
        {(crear)? <CrearComponente categorias={categorias} setCrear={setCrear}/> : ""}
        {(eliminar)?  <EliminarComponente setEliminar={setEliminar} eliminar={componeteEliminar}/> : ""}
        {(editar)?  <EditComponente setEditar={setEditar} componenteEditar={componeteEditar}/> : ""}
        <h2>Componentes</h2>

        <div className='btn-crear'>
            <button onClick={()=>setCrear(true)}>Crear +</button>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th className="id">id</th>

                    <th>Imagen</th>
                    <th className="config">edit</th>
                    <th className="config">Delete</th>
                </tr>
            </thead>
                <tbody>
                {
                componentes.map((componente)=>{
                        return ( 
                            <tr key={componente._id}>
                                <td>{componente._id}</td>
                                <td className='img-container'><img src={componente.destination} alt={componente.titulo}/></td>
                                <td className="editar"><i className="fas fa-edit" onClick={()=>{setEditar(true); setCompoEditar(componente)}}></i></td>
                                <td className="eliminar"><i className="fas fa-trash" onClick={()=>{setEliminar(true); setCompoEliminar(componente)}}></i></td>
                            </tr>
                        );
                    })
                    
                } 
                </tbody>

        </table>
        </>

     );
}
 
export default TableComponent;