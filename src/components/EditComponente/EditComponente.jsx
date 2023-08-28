import { useState,useContext } from "react";
import { ContextoAdmin } from "../../contextos/ContextoAdmin";


const EditComponente = ({setEditar,componenteEditar,categorias,url}) => {

    const [nuevoTitulo,setNuevoTitulo] = useState(componenteEditar.titulo);
    const [nuevaDescripcion,setNuevaDescripcion] = useState(componenteEditar.description);
    const [html,setHtml] = useState(componenteEditar.codigo.html.replaceAll( "&lt;","<").replaceAll("&gt;",">"));
    const [style,setStyle] = useState(componenteEditar.codigo.style);
    const [script,setScript] = useState(componenteEditar.codigo.script);
    const [file,setFile] = useState(null);
    
    const [toggleState,setToggleState] = useState(1); 
    // const [nuevasCategorias,setNuevasCategorias] = useState(componenteEditar.categorias.map(categoria=>categoria.nombre));
    // let [nuevasCategoriasEnviar,setCategoriasEnviar]=useState(componenteEditar.categorias.map(categoria=>categoria._id));
    
    const {actualizar,setActualizar}= useContext(ContextoAdmin);

    const nuevoTitutloOnChange=(e)=>setNuevoTitulo(e.target.value);
    const nuevaDescripcionOnChange=(e)=>setNuevaDescripcion(e.target.value);
    const fileOnChange = (e)=> setFile(e.target.files[0]);
    const htmlOnChange=(e)=> setHtml(e.target.value);
    const styleOnChange=(e)=> setStyle(e.target.value);
    const scriptOnChange=(e)=> setScript(e.target.value);

    const editarCompon= (e,id="123")=>{
        e.preventDefault();
        // const categoriasCheck = nuevasCategoriasEnviar.substring(0,nuevasCategoriasEnviar.length-1).split(",");

        const data = new FormData();
        const codigo ={
            html,style,script
        }
        data.append("imagenxd",file);
        data.append("titulo",nuevoTitulo);
        data.append("description",nuevaDescripcion);
        data.append("codigo",JSON.stringify(codigo))

        

        fetch(`${url}componente/${id}`,{
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
    const toggleTab =(index)=>{
        setToggleState(index);
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
                            onChange={nuevaDescripcionOnChange}
                            />
                    </div>
                    <div className="form-thing">
                        <label>Descripcion</label>
                        <textarea
                            className='description'
                            placeholder='description'
                            type="text" 
                            required
                            minLength={20}
                            value={nuevaDescripcion}
                            onChange={nuevoTitutloOnChange}
                            />
                    </div>
                    <div className='form-file'>
                        <label>Imagen o gif</label>
                        <input
                            className='input-file'
                            type="file"
                            required
                            onChange={fileOnChange}
                            />
                    </div>
                    <div className='codigos'>
                        <nav className='codigos-navigation'>
                            <label onClick={()=>toggleTab(1)} className={toggleState===1?"active":""}>html</label>
                            <label onClick={()=>toggleTab(2)} className={toggleState===2?"active":""}>css</label>
                            <label onClick={()=>toggleTab(3)} className={toggleState===3?"active":""}>script</label>
                        </nav>
                    
                        <div className='form-thing'>
                            <textarea 
                                className={toggleState===1?"active":""}
                                placeholder='html'
                                type="text"
                                value={html}
                                onChange={htmlOnChange}
                                />
                        </div>
                        <div className='form-thing'>
                            <textarea 
                                className={toggleState===2?"active":""}
                                placeholder='css'
                                type="text"
                                value={style}
                                onChange={styleOnChange}
                                />
                        </div>
                        <div className='form-thing'>
                            <textarea 
                                className={toggleState===3?"active":""}
                                placeholder='script'
                                type="text"
                                value={script}
                                onChange={scriptOnChange}
                                />
                        </div>
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