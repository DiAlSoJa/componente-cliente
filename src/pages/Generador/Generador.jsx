import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Generador.css";
import { useState } from "react";

const Generador = () => {
    const [active,setActive]=useState(false);
    const toggle =()=> setActive(!active);

    return ( 
        <>
            <Header visible={false}></Header>
            <aside className={`aside_generator ${active?"active":""} `}>
                
                <div className='toggle' onClick={toggle}>
                    <i className="fa-solid fa-bars" ></i>
                </div>
                <ul>
                    <li><a href="/generador/border-radius">border-radius</a></li>
                    <li><a href="/generador/box-shadow">Box-shadow</a></li>
                    <li><a href="/generador/filter">Filter</a></li>
                    <li><a href="/generador/glassmorphism">Glassmorphism</a></li>
                    <li><a href="/generador/neumorphism">Neumorphism</a></li>
                    <li><a href="/generador/transform">Transform</a></li>
                </ul>
            </aside>

            <div className="generador">
                <Outlet/>
            </div>

        </>
     );
}
 
export default Generador;