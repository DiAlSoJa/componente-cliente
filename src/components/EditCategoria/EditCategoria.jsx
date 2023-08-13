const EditCategoria = ({setFormularioEditar,categoria}) => {
    const [nuevoNombre,setNuevoNombre] = useState(categoria.nombre);

    const nuevoNombreOnChange= (e)=>setNuevoNombre(e.target.value);

    const editarNombre= (e,id="123")=>{
        e.preventDefault();
        fetch(`http://localhost:8000/api/categoria/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nombre:nuevoNombre.toUpperCase()})
        }).then(res=> res.json()).then(datos=>console.log(datos));

        setNuevoNombre("");
        setFormularioEditar(false);
    }


    return ( 
        <>
            <div className="editar-form">
                
                <form onSubmit={(e)=>editarNombre(e,categoria.id)}>
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
                    <FontAwesomeIcon icon={faXmark} className="icon" onClick={()=>{setFormularioEditar(false)}}></FontAwesomeIcon>
                </div>
            </div>
        </>
     );
}
export default EditCategoria;