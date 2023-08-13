import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import foto1 from "../../assets/img/foto1.jpg";
import MasComponentes from "../../components/MasComponentes/MasComponentes";
import "./Post.css";



const Post = () => {
 
    return ( 
    <>
        <Header></Header>
        <Nav/>
        <article className='article'>

            <h2  className='title-article'>Tituloxd</h2>
            
            <div className='image-container'>
                <img src={foto1} alt="juan"></img>
            </div>
            <div className='description'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, temporibus? Earum, illum? Facilis tempora voluptatibus voluptatum quis architecto laborum labore animi voluptatem vero iure veniam dolorem nulla, quibusdam pariatur iusto.</p>
            </div>
                            
            <div className='categorias'>
                    <span >categoria 1</span>
                    <span >categoria 2</span>
                    <span >categoria 3</span>
                    <span >categoria 4</span>
                    <span >categoria 4</span>
                    <span >categoria 4</span>
            </div>

        </article>

        <MasComponentes/>
        
    </>
            

     );
}
 
export default Post;