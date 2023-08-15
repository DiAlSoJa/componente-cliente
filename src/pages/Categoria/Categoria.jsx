import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

const Categoria = () => {
    return ( 
        <>
            <Header></Header>
            <Nav></Nav>
            <Outlet/>
        </>
     );
}
 
export default Categoria;