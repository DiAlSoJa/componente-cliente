import foto1 from "../../assets/img/foto1.jpg";
import "./Cards.css";

const data = [
    {
      _id: 1,
      destination: "imagen1.jpg",
      titulo: "Título del artículo 1",
      description: "Descripción del artículo 1",
      categorias: [
        { nombre: "Categoría 1" },
        { nombre: "Categoría 2" },
      ],
    },
    {
      _id: 2,
      destination: "imagen2.jpg",
      titulo: "Título del artículo 2",
      description: "Descripción del artículo 2",
      categorias: [
        { nombre: "Categoría 3" },
        { nombre: "Categoría 4" },
      ],
    },
    {
        _id: 3,
        destination: "imagen1.jpg",
        titulo: "Título del artículo 3",
        description: "Descripción del artículo 1",
        categorias: [
          { nombre: "Categoría 1" },
          { nombre: "Categoría 2" },
        ],
      },
      {
        _id: 4,
        destination: "imagen2.jpg",
        titulo: "Título del artículo 4",
        description: "Descripción del artículo 2",
        categorias: [
          { nombre: "Categoría 3" },
          { nombre: "Categoría 4" },
        ],
      },
      {
        _id: 5,
        destination: "imagen1.jpg",
        titulo: "Título del artículo 5",
        description: "Descripción del artículo 1",
        categorias: [
          { nombre: "Categoría 1" },
          { nombre: "Categoría 2" },
        ],
      },
      {
        _id: 6,
        destination: "imagen2.jpg",
        titulo: "Título del artículo 6",
        description: "Descripción del artículo 2",
        categorias: [
          { nombre: "Categoría 3" },
          { nombre: "Categoría 4" },
        ],
      },
      {
        _id: 7,
        destination: "imagen1.jpg",
        titulo: "Título del artículo 7",
        description: "Descripción del artículo 1",
        categorias: [
          { nombre: "Categoría 1" },
          { nombre: "Categoría 2" },
        ],
      },
      {
        _id: 8,
        destination: "imagen2.jpg",
        titulo: "Título del artículo 8",
        description: "Descripción del artículo 2",
        categorias: [
          { nombre: "Categoría 3" },
          { nombre: "Categoría 4" },
        ],
      }
    // Agrega los otros 7 objetos aquí...
  ];
const Cards = () => {

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
                    <img src={foto1} alt={element.titulo}></img>
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