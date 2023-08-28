import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Cards from "../../components/Cards/Cards";
const Home = ({url}) => {
    return ( 
        <>
            <Header></Header>
            <Nav/>
            <Cards url={url}/>
        </>
     );
}
 
export default Home;