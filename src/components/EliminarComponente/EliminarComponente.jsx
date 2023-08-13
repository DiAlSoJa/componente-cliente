import { useContext } from "react";
import {ContextoAdmin} from "../../contextos/ContextoAdmin";


const EliminarComponente=({eliminar="algo",setEliminar})=>{
    const {actualizar,setActualizar}= useContext(ContextoAdmin);

    const eliminarAlgo=(e)=>{
        e.preventDefault();
        fetch(`http://localhost:8000/componente/${eliminar._id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "x-token":localStorage.getItem("x-token")
            },
        }).then(res=>res.json()).then(datos=>{
            console.log(datos)
            setActualizar(!actualizar);
        });
        setEliminar(false);
    }
    return(
        <div className="eliminar-form">
            
            <form onSubmit={eliminarAlgo}>
                <h3>Estas seguro de eliminar {eliminar.nombre|| eliminar.username|| eliminar.titulo}</h3>
                <div className="eliminar-botones">
                    <button onClick={()=>setEliminar(false)} className="btn" >Cancelar</button>
                    <button type="submit" className="btn" id="eliminar-button">Eliminar</button>
                </div>
            </form>
        </div>
    );
}

export default EliminarComponente;