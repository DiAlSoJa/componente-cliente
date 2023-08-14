import "./Codigo.css";

const Codigo = ({codigo,titulo}) => {
    const copiarPortapapeles=()=>{

        navigator.clipboard.writeText(codigo);
    }
    return ( 
        <div className="code__container">
            <div className="code__titulo">
                <h3>{titulo}</h3>
            </div>
            <div className="codigo">
                <pre>
                    <code>{codigo}</code>
                </pre>
            </div>
            <i className="fa-regular fa-clipboard" onClick={copiarPortapapeles}></i>
        </div>
     );
}
 
export default Codigo;