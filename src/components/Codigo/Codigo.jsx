import "./Codigo.css";

const Codigo = ({codigo,titulo}) => {
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
        </div>
     );
}
 
export default Codigo;