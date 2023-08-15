import React, { useState } from 'react';

import "../Cards/Cards.css";
const CategoriaCards = () => {
    const [data,setData] = useState([]);


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
        return(<h2 className='error-text'>Hubo un error, intentelo mas tarde</h2>)
    }

}
 
export default CategoriaCards;