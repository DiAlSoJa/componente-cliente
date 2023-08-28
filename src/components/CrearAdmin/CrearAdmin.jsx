import React, { useState ,useContext} from 'react';
import {ContextoAdmin} from "../../contextos/ContextoAdmin";
const CrearAdmin = ({setCrear,url}) =>{
    const [userName,setUserName] = useState("");
    const [correo,setCorreo] = useState("");
    const [password,setPassword] = useState("");

    const {actualizar,setActualizar}= useContext(ContextoAdmin);

    const userNameOnchange = (e) => setUserName(e.target.value);
    const correoOnchange = (e) => setCorreo(e.target.value);
    const passwordOnchange = (e) => setPassword(e.target.value);

    const crearAdmin = (e) =>{
        e.preventDefault();

        fetch(url+"admin/crearadmin",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "x-token" : localStorage.getItem("x-token")
            },
            body: JSON.stringify({username:userName,correo,password})
        }).then(res=> res.json()).then(datos=>setActualizar(!actualizar));

        setUserName("");
        setCorreo("");
        setPassword("");
        setCrear(false);
    }
    return (
        <div className='crear'>
                <form onSubmit={crearAdmin}>
                    <div className='form-thing'>
                        <label>UserName</label>
                        <input 
                            type="text"
                            value={userName}
                            onChange={userNameOnchange}
                            required
                            />
                    </div>
                    <div className='form-thing'>
                        <label>correo</label>
                        <input 
                             type="email"
                             value={correo}
                             onChange={correoOnchange}
                             required
                        />
                    </div>
                    <div className='form-thing'>
                        <label>password</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={passwordOnchange}
                            required
                        />
                    </div>
                    <div className='form-thing'>
                        <button type='submit'>crear</button>
                    </div>
                </form>
                <div className="cerrar-editar">
                    <i className="fas fa-times icon" onClick={()=>{setCrear(false)}}></i>
                </div>
            </div>
        );
}

export default CrearAdmin;