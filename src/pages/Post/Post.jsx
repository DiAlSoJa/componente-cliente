import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import MasComponentes from "../../components/MasComponentes/MasComponentes";
import "./Post.css";
import { useState,useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import {useParams,Navigate} from "react-router-dom";
import Codigo from "../../components/Codigo/Codigo";
// import EmergenteBaja from "../../components/EmergenteBaja/EmergenteBaja";

const Post = () => {
    const [loading,setLoading] =useState(true);
    const [existeComponente,setExisteComponente] = useState(false)
    const [componente,setComponente] = useState({});
    // const [activado,setActivado]
    const {id} = useParams();
    
    useEffect(()=>{
        const url = "http://localhost:8000/componente/"+id;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            if(data._id){
                console.log(data);   
                setComponente(data);
                setExisteComponente(true);
                setLoading(false);
            }else{
                setExisteComponente(false);
                setLoading(false);
            }
        })
    },[id])
    return ( 
    <>
        <Header></Header>
        <Nav/>
        {/* {activado && <EmergenteBaja/>} */}
        {loading
        ?
            <Loader/>
        : <>
            {
                existeComponente
                ?
                <>
                    <article className='article'>
        
                        <h2  className='title-article'>{componente.titulo}</h2>
                        
                        <div className='image-container'>
                            <img src={componente.destination} alt="juan"></img>
                        </div>
                        <div className='description'>
                            <p>{componente.description}</p>
                        </div>
                                        
                        <div className='categorias'>
                                {componente.categorias.map(cat=>{
                                    return(<span>{cat.nombre}</span>)
                                })}
                        </div>
        
                    </article>
                    {componente.codigo.html? <Codigo titulo={"Html"} codigo={componente.codigo.html.replaceAll( "&lt;","<").replaceAll("&gt;",">")}/>: ""}
                    {componente.codigo.style? <Codigo titulo={"Css"} codigo={componente.codigo.style}/>: ""}
                    {componente.codigo.script? <Codigo titulo={"Script"} codigo={componente.codigo.script}/>: ""}
                </>
                :
                    <Navigate to="/notfound"/>
                }
            </>
        }

        <MasComponentes/>
        
    </>
            

     );
}
 
export default Post;