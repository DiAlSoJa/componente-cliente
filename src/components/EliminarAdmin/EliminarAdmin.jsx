import { useContext } from "react";
import {ContextoAdmin} from "../../contextos/ContextoAdmin";


const EliminarAdmin=({eliminar="algo",setEliminar})=>{
    const {actualizar,setActualizar}= useContext(ContextoAdmin);

    const eliminarAlgo=(e)=>{
        e.preventDefault();
        fetch(`http://localhost:8000/admin/${eliminar.uid}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            },
        }).then(res=>res.json()).then(datos=>{
            setActualizar(!actualizar);
            console.log(datos);
        });
        setEliminar(false);
    }
    return(
        <div className="eliminar-form">
            
            <form onSubmit={eliminarAlgo}>
                <h3>Estas seguro de eliminar <span>{eliminar.username}</span></h3>
                <div className="eliminar-botones">
                    <button onClick={()=>setEliminar(false)} className="btn">Cancelar</button>
                    <button type="submit" className="btn" id="eliminar-button">Eliminar</button>
                </div>
            </form>
        </div>
    );
}

export default EliminarAdmin;