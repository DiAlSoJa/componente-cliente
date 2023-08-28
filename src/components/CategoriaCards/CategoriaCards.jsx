import React, { useEffect, useState } from 'react';
import Loader from "../Loader/Loader";
import "../Cards/Cards.css";
const CategoriaCards = ({categoria,url}) => {
    const [data,setData] = useState([]);


    useEffect(()=>{

        
        fetch(url+"componente/c/"+categoria.toUpperCase(),{
            headers:{
                "x-token":localStorage.getItem("x-token")
            }
        })
        .then(res=>res.json())
        .then(async datos=>{
            if(datos.componentes){
                await setData(datos.componentes)
            }else{

            }
        })
        .catch(e=>console.log(e))
    },[categoria,url]);


    const devolverTexto = (text) =>{
        if(text.length>=50){
            let texto=text.slice(0,50);
            return texto.concat("...");
        }else{
            return text;
        }
    }
    if(data.length>0){
        return ( 
            <div className='cards'>  
                {data.map(element =>{
                    return(
        
                    <a key={element._id} className="card" href={`/post/${element._id}`}>
                        <div className="component">
                            <img src={element.destination} alt={element.titulo}></img>
                        </div>
                        <div className="card-content">
        
                            <h3 className="titulo ">{element.titulo}</h3>
                            <p className="desc">{devolverTexto(element.description)}</p>
                                <div className="tag-box "><p>Made with:</p>
                                    <div className="tags">{element.categorias.map((tec,index) =>{
                                    return(
                                            <div key={index} className="tag">
                                                {tec.nombre}
                                            </div>
                                    )})}
                                    </div>
                                </div>
                        </div>
        
                    </a> 
                    )
                })}
                </div>
        );

    }else{
        return(<Loader/>)
    }

}
 
export default CategoriaCards;