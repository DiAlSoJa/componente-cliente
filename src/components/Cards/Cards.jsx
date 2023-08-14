import { useEffect, useState } from "react";
import "./Cards.css";


const Cards = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    const traerComponentes=()=>{
      fetch("http://localhost:8000/componente/")
      .then(res=>res.json())
      .then(componentes=>setData(componentes.componentes))
      .catch(e=> console.log(e));
    }
    traerComponentes();
  },[]);
    const devolverTexto = (text) =>{
        if(text.length>=50){
            let texto=text.slice(0,50);
            return texto.concat("...");
        }else{
            return text;
        }
    }
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
     </div>);
}
 
export default Cards;