import {Routes,Route,Navigate} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Post from "../pages/Post/Post.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Login from "../pages/Login/Login.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import TableAdmin from "../components/TableAdmin/TableAdmin.jsx";
import TableComponent from "../components/TableComponent/TableComponent.jsx";
import TableCategoria from "../components/TableCategoria/TableCategoria.jsx";
import React from 'react';

import PrivateRoute from "../components/PrivateRoute/PrivateRoute.jsx";
import Categoria from "../pages/Categoria/Categoria.jsx";
import CategoriaCards from "../components/CategoriaCards/CategoriaCards.jsx";

const Router = () => {

    return ( 
        <Routes>
            <Route element={<Home/>} path="/"></Route>

            {/* privado */}
            <Route element={<PrivateRoute/>}>

                <Route path="/ddd" element={<Admin/>}>
                    <Route path="componente" element={<TableComponent/>}></Route>
                    <Route path="admin" element={<TableAdmin/>}></Route>
                    <Route path="categoria" element={<TableCategoria/>}></Route>
                </Route>

            </Route>

            <Route path="/login" element={<Login/>}></Route>

            {/* <Route path="/search" element={<h1>search</h1>}></Route> */}

            <Route path="/post/:id" element={<Post/>}></Route>
            
            
            <Route path="/categoria" element={<Categoria/>}>
                <Route index element={<Navigate to="/notfound"/>}/>
                <Route path="javascript" element={<CategoriaCards categoria="javascript"/>}/>
                <Route path="css" element={<CategoriaCards categoria="css"/> }/>
                <Route path="html" element={<CategoriaCards categoria="html"/>}/>
                <Route path="template" element={<CategoriaCards categoria="template"/>}/>
                <Route path="python" element={<CategoriaCards categoria="python"/>}/>
                <Route path="reactjs" element={<CategoriaCards categoria="reactjs"/>}/>
                <Route path="nodejs" element={<CategoriaCards categoria="nodejs"/>}/>

            </Route> 
           

            <Route path="/notfound" element={<NotFound/>}></Route>
            <Route path="*" element={<Navigate to="/notfound"/>}></Route>

        </Routes>
     );
}
 
export default Router;