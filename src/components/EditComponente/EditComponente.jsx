
const EditComponente = ({setFormularioEditar,componente,categorias}) => {
    const [nuevoTitulo,setNuevoTitulo] = useState(componente.titulo);
    const [nuevasCategorias,setNuevasCategorias] = useState(componente.categorias.map(categoria=>categoria.nombre));
    let [nuevasCategoriasEnviar,setCategoriasEnviar]=useState(componente.categorias.map(categoria=>categoria._id));
    
    const {actualizar,setActualizar}= useContext(ContextoAdmin);

    const nuevoTitutloOnChange=(e)=>setNuevoTitulo(e.target.value);

    const editarCompon= (e,id="123")=>{
        e.preventDefault();
        const categoriasCheck = nuevasCategoriasEnviar.substring(0,nuevasCategoriasEnviar.length-1).split(",");
        const data ={
            titulo:nuevoTitulo,categorias:categoriasCheck
        }

        fetch(`http://localhost:8000/api/componente/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res=> res.json()).then(datos=>setActualizar(!actualizar));

        setNuevoTitulo("");
        setFormularioEditar(false);

    }
    
    return ( 
        <>
            <div className="editar-form">
                
                <form onSubmit={(e)=>editarCompon(e,componente.id)}>
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
                    <CategoriasInput categorias={categorias} nuevasCategorias={nuevasCategorias} nuevasCategoriasEnviar={nuevasCategoriasEnviar} setCategoriasEnviar={setCategoriasEnviar}/>
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

export default EditComponente;