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

        // if(document.body.classList.contains("dark")){
        //     localStorage.setItem("dark-mode","true");
           
        // }else{
        //     localStorage.setItem("dark-mode","false");
        // }
    }


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
                <div className="toggle" >
                    <button  className="toggle-button active" onClick={toggle}>
                        <span><i className="fa-solid fa-sun"></i></span> 
                        <span><i className="fa-solid fa-moon"></i></span> 
                    </button>
                </div>
                
        </div>
     );
}
 
export default Header;