

const EditAdmin = ({setFormularioEditar,admin}) => {
    const [nuevoUserName,setNuevoUserName] = useState(admin.username);
    const [nuevoCorreo,setNuevoCorreo] = useState(admin.correo);

    const nuevoUserNameOnChange= (e)=>setNuevoUserName(e.target.value);
    const nuevoCorreoOnChange= (e)=>setNuevoCorreo(e.target.value);

    const editarUserName= (e,id="123")=>{
        e.preventDefault();
        fetch(`http://localhost:8000/elmerochile/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username:nuevoUserName,correo:nuevoCorreo})
        }).then(res=> res.json()).then(datos=>console.log(datos));

        setFormularioEditar(false);
    }
    return ( 
        <>
            <div className="editar-form">
                
                <form onSubmit={(e)=>editarUserName(e,admin.id)}>
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
                    {/* <FontAwesomeIcon icon={faXmark} className="icon" onClick={()=>{setFormularioEditar(false)}}></FontAwesomeIcon> */}
                </div>
            </div>
        </>
     );
}
 
export default EditAdmin;