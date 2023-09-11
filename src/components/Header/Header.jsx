import React from 'react';
import "./Header.css";

const Header = () => {
    // const [search,setSearch] =useState("");
    
    
    // const searchOnChange = (e)=> {
    //     setSearch(e.target.value);
       
    // };

    const toggle = ()=>{
        document.body.classList.toggle("dark-mode");
        document.querySelector(".header .toggle .toggle-button").classList.toggle("active");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("dark-mode","true");
           
        }else{
            localStorage.setItem("dark-mode","false");
        }
    }

    const navToggle=()=>document.getElementById("nav").classList.toggle("active");


    return ( 
        <div className="header">
            <div className="header__logo">
                <a href="/">Tu<span className="resaltar">Frontend</span></a>
            </div>
            
                {/* <div className="search">
                    <form className="search-box" >
                        <input 
                            type="text" 
                            placeholder="Buscar"
                            value={search}
                            onChange={searchOnChange}
                            />
                        <a href={"/search?search_query="+search.replaceAll(" ","+")}  className="boton-submit" >
                            <i className="fa-solid fa-magnifying-glass" ></i>
                        </a>
                    </form>
                    
                </div> */}
                <ul id="nav" className=''>
                    <li><a href='/'>Generadores</a></li>
                    <li><a href='/'>Categorias</a></li>
                </ul>
                <div className="toggle" >
                    <button  className="toggle-button active" onClick={toggle}>
                        <span><i className="fa-solid fa-sun"></i></span> 
                        <span><i className="fa-solid fa-moon"></i></span> 
                    </button>
                </div>
                <div className='bars'>
                    <i className="fa-solid fa-bars" onClick={navToggle}></i>
                </div>
                
        </div>
     );
}
 
export default Header;