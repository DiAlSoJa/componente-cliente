import {Routes,Route,Navigate} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Post from "../pages/Post/Post.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Login from "../pages/Login/Login.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import Generador from "../pages/Generador/Generador.jsx";
import TableAdmin from "../components/TableAdmin/TableAdmin.jsx";
import TableComponent from "../components/TableComponent/TableComponent.jsx";
import TableCategoria from "../components/TableCategoria/TableCategoria.jsx";
import React from 'react';

import PrivateRoute from "../components/PrivateRoute/PrivateRoute.jsx";
import Categoria from "../pages/Categoria/Categoria.jsx";
import CategoriaCards from "../components/CategoriaCards/CategoriaCards.jsx";
import BorderRadius from "../components/Border-radius/BorderRadius.jsx";
import BoxShadow from "../components/Box-shadow/BoxShadow.jsx";
import Filter from "../components/Filter/Filter.jsx";
import Glassmorphism from "../components/Glassmorphism/Glassmorphism.jsx";
import Neumorphism from "../components/Neumorphism/Neomorphism.jsx";
import Transform from "../components/Transform/Transform.jsx";

const Router = () => {
    const url="http://localhost:8000/";

    return ( 
        <Routes>
            <Route element={<Home url={url}/>} path="/"></Route>

            {/* privado */}
            <Route element={<PrivateRoute url={url}/>}>

                <Route path="/ddd" element={<Admin url={url}/>}>
                    <Route path="componente" element={<TableComponent url={url}/>}></Route>
                    <Route path="admin" element={<TableAdmin url={url}/>}></Route>
                    <Route path="categoria" element={<TableCategoria url={url}/>}></Route>
                </Route>

            </Route>

            <Route path="/login" element={<Login url={url}/>}></Route>

            {/* <Route path="/search" element={<h1>search</h1>}></Route> */}

            <Route path="/post/:id" element={<Post url={url}/>}></Route>
            
            
            <Route path="/categoria" element={<Categoria/>}>
                <Route index element={<Navigate to="/notfound"/>}/>
                <Route path="javascript" element={<CategoriaCards url={url} categoria="javascript" />}/>
                <Route path="css" element={<CategoriaCards url={url} categoria="css"/> }/>
                <Route path="html" element={<CategoriaCards url={url} categoria="html"/>}/>
                <Route path="template" element={<CategoriaCards url={url} categoria="template"/>}/>
                <Route path="python" element={<CategoriaCards url={url} categoria="python"/>}/>
                <Route path="reactjs" element={<CategoriaCards url={url} categoria="reactjs"/>}/>
                <Route path="nodejs" element={<CategoriaCards url={url} categoria="nodejs"/>}/>

            </Route> 

            <Route path="/generador" element={<Generador/>}>
                {/* <Route index element={<Navigate to="/notfound"/>}/> */}
                <Route path="border-radius" element={<BorderRadius/>}/>
                <Route path="box-shadow" element={<BoxShadow/>}/>
                <Route path="filter" element={<Filter/>}/>
                <Route path="glassmorphism" element={<Glassmorphism/>}/>
                <Route path="neumorphism" element={<Neumorphism/>}/>
                <Route path="transform" element={<Transform/>}/>
               

            </Route> 
           

            <Route path="/notfound" element={<NotFound/>}></Route>
            <Route path="*" element={<Navigate to="/notfound"/>}></Route>

        </Routes>
     );
}
 
export default Router;