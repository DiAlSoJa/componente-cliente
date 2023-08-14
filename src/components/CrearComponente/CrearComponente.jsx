import React, { useState, useContext} from 'react';
import { ContextoAdmin } from '../../contextos/ContextoAdmin';

const CrearComponente = ({categorias,setCrear}) => {
    const [titulo,setTitulo]= useState("");
    let [categoriasEnviar,setCategoriasEnviar]=useState("");
    let [categoriasEscribir,setCategoriasEscribir]=useState("");
    const [html,setHtml] = useState("");
    const [style,setStyle] = useState("");
    const [script,setScript] = useState("");
    const [toggleState,setToggleState] = useState(1);
    const [description,setDescription]=useState("");

    const [file,setFile] = useState(null);

    const {setActualizar}= useContext(ContextoAdmin);

    const tituloOnChange=(e)=> setTitulo(e.target.value);
    const descriptionOnChange=(e)=> setDescription(e.target.value);
    const categoriasOnChange=(e)=> setCategoriasEscribir(e.target.value);
    const htmlOnChange=(e)=> setHtml(e.target.value);
    const styleOnChange=(e)=> setStyle(e.target.value);
    const scriptOnChange=(e)=> setScript(e.target.value);
    const fileOnChange = (e)=> setFile(e.target.files[0]);

    const crearComponente=(e)=>{
        e.preventDefault();
        let categoriasCheck=[];
        categoriasCheck = categoriasEnviar.substring(0,categoriasEnviar.length-1).split(",");
        const data = new FormData();
        const codigo ={
            html,style,script
        }

        data.append("imagenxd",file);
        data.append("titulo",titulo);
        data.append("description",description);
        data.append("codigo",JSON.stringify(codigo))
        categoriasCheck.forEach(cate=>{
            data.append("categorias",cate);
        });

        fetch(`http://localhost:8000/componente`,{
            method: "POST",
            body:data,
            headers:{
                "x-token":localStorage.getItem("x-token")
            }
        }).then(res=>res.json()).then(datos=>{
            console.log(datos)
            setActualizar(prev=>!prev)
        });



    }

    const toggleTab =(index)=>{
        setToggleState(index);
    }
    return ( 
        <div className='crear'>
            <form onSubmit={crearComponente} className="crear-componente">
                <div className='form-thing'>
                    <label>titulo</label>
                    <input 
                        type="text" 
                        required
                        value={titulo}
                        onChange={tituloOnChange}
                        />
                </div>
                <div className='form-thing'>
                    <label>categorias</label>
                    <div>
                        <input 
                            type="text" 
                            required
                            value={categoriasEscribir}
                            onChange={categoriasOnChange}
                            readOnly
                            />
                        <div className='categorias'>
                            {categorias.map((categoria,index)=>{
                                return (
                                <span className='categoria' key={index} onClick={(e)=>{
                                        e.target.classList.toggle("si");
                                        if(e.target.classList.contains("si")){
                                            let cateEscribir = categoriasEscribir+=categoria.nombre+",";
                                            let cateEnviar = categoriasEnviar+=categoria._id+",";
                                            
                                            setCategoriasEnviar(cateEnviar);
                                            setCategoriasEscribir(cateEscribir);
                                        }else{
                                            let cateEscribir=categoriasEscribir.replace(categoria.nombre+",","");
                                            let cateEnviar=categoriasEnviar.replace(categoria._id+",","");
                                            setCategoriasEnviar(cateEnviar);
                                            setCategoriasEscribir(cateEscribir);

                                        }
                                     }}>
                                    {categoria.nombre}    
                                </span>)
                            })}
                        </div>
                    </div>
                </div>
                <div className='form-thing'>
                    <label>Description</label>
                    <textarea
                    className='description'
                        placeholder='description'
                        type="text" 
                        required
                        minLength={20}
                        value={description}
                        onChange={descriptionOnChange}
                        />
                </div>
                <hr className='line'></hr>

                <div className='form-file'>
                    <label>Imagen o gif</label>
                    <input
                        className='input-file'
                        type="file"
                        required
                        onChange={fileOnChange}
                        />
                </div>

                <hr className='line'></hr>

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
                
                <div className='form-thing'>
                    <button type='submit'>crear</button>
                </div>
            </form>
            <div className="cerrar-editar">
            <i className="fas fa-times icon" onClick={()=>{setCrear(false)}}></i>
            </div>
        </div>
     );
}

export default CrearComponente;