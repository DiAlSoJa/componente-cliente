import { useState,useContext } from "react";
import { ContextoAdmin } from "../../contextos/ContextoAdmin";


const EditComponente = ({setEditar,componenteEditar,categorias}) => {

    const [nuevoTitulo,setNuevoTitulo] = useState(componenteEditar.titulo);
    // const [nuevasCategorias,setNuevasCategorias] = useState(componenteEditar.categorias.map(categoria=>categoria.nombre));
    // let [nuevasCategoriasEnviar,setCategoriasEnviar]=useState(componenteEditar.categorias.map(categoria=>categoria._id));
    
    const {actualizar,setActualizar}= useContext(ContextoAdmin);

    const nuevoTitutloOnChange=(e)=>setNuevoTitulo(e.target.value);

    const editarCompon= (e,id="123")=>{
        e.preventDefault();
        // const categoriasCheck = nuevasCategoriasEnviar.substring(0,nuevasCategoriasEnviar.length-1).split(",");
        const data ={
            titulo:nuevoTitulo
        }

        fetch(`http://localhost:8000/componente/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "x-token": localStorage.getItem("x-token")
            },
            body: JSON.stringify(data)
        }).then(res=> res.json()).then(datos=>setActualizar(!actualizar));

        setNuevoTitulo("");
        setEditar(false);

    }
    
    return ( 
        <>
            <div className="editar-form">
                
                <form onSubmit={(e)=>editarCompon(e,componenteEditar._id)}>
                    <h3>Editar Componentes</h3>
                    <div className="form-thing">
                        <label>Titulo</label>
                        <input 
                            type="text"
                            value={nuevoTitulo}
                            required
                            onChange={nuevoTitutloOnChange}
                            />
                    </div>
                    {/* <CategoriasInput categorias={categorias} nuevasCategorias={nuevasCategorias} nuevasCategoriasEnviar={nuevasCategoriasEnviar} setCategoriasEnviar={setCategoriasEnviar}/> */}
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

export default EditComponente;