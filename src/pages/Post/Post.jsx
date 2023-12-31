import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import MasComponentes from "../../components/MasComponentes/MasComponentes";
import { useState,useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import {useParams,Navigate} from "react-router-dom";
import Codigo from "../../components/Codigo/Codigo";
import "./Post.css";
// import EmergenteBaja from "../../components/EmergenteBaja/EmergenteBaja";

const Post = ({url}) => {
    const [loading,setLoading] =useState(true);
    const [existeComponente,setExisteComponente] = useState(false)
    const [componente,setComponente] = useState({});
    // const [activado,setActivado]
    const {id} = useParams();
    
    useEffect(()=>{
        console.log(url)
        fetch(url+"/componente/"+id)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
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
    },[id,url]);

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
                                    return(<a href={"/categoria/"+cat.nombre}><span>{cat.nombre}</span></a>)
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

        <MasComponentes url={url}/>
        
    </>
            

     );
}
 
export default Post;