import Cards from "../Cards/Cards";
import "./MasComponentes.css";
const MasComponentes = ({url}) => {
    return ( 
        <div className="mas-componentes">
            <h2>Mas de tuFrontend</h2>
            <Cards url={url}/>
        </div>
     );
}
 
export default MasComponentes;