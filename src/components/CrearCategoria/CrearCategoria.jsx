import React, { useState, useContext} from 'react';

import { ContextoAdmin } from '../../contextos/ContextoAdmin';

const CrearCategoria = ({setCrear,url})=>{
    const [nombre,setNombre] = useState("");

    const nombreOnchange = (e) => setNombre(e.target.value);

    const {actualizar,setActualizar}= useContext(ContextoAdmin);


    const crearCategoria = (e) =>{
        e.preventDefault();

        fetch(url+"categoria",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "x-token": localStorage.getItem("x-token")
            },
            body: JSON.stringify({nombre:nombre.toUpperCase()})
        }).then(res=> res.json()).then(datos=>setActualizar(!actualizar));

        setNombre("");
        setCrear(false);
    }
    
    return (
        <div className='crear'>
                <form onSubmit={crearCategoria}>
                    <div className='form-thing'>
                        <label htmlFor='nombre'>Nombre</label>
                        <input type="text" 
                                required
                                name='nombre'
                                value={nombre}
                                onChange={nombreOnchange}
                            />
                    </div>
                    <div className='form-thing'>
                        <button type='submit' >crear</button>
                    </div>
                </form>
                <div className="cerrar-editar">
                    <i className="fas fa-times icon" onClick={()=>{setCrear(false)}}></i>

                </div>
            </div>
    );
}

export default CrearCategoria;