import React, { useState } from 'react';
import "./LoginForm.css";

const LoginForm = ({setActualizar,url}) => {
    const [correo,setCorreo]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError] = useState(null);

    const onChangeCorreo=(e)=>{
        setCorreo(e.target.value);
    }
    const onChangePassword=(e)=>{
        setPassword(e.target.value);
    }

    const sendData=(e)=>{
        e.preventDefault();

        const data = {
            correo,
            password
        };


        fetch(url+"admin/iniciarsesion",{
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res=>res.json())
        .then(datos=> {
            console.log(datos)
            if(datos.token){
                 localStorage.setItem("x-token",datos.token);
                 setError(null);
                 setActualizar(prev=>!prev);
            }else{ 
                setError(datos.mensage);
                setCorreo("");
                setPassword("");
            };
        })
        .catch(error=>{
            console.log(error);
            setError("Hubo un error, intentelo mas tarde");
            setCorreo("");
            setPassword("");
        });
    }
    return ( 
        <div className="form-wrap">
            <div className='form'>

                <form onSubmit={sendData} method="post">
                    <h3 >Tu<span>Fronted</span></h3>     
                    
                    <div className='form-group'>
                        <label>Email</label>
                        <input type="correo" name="correo" placeholder="Email" required onChange={onChangeCorreo } value={correo}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" required onChange={onChangePassword } value={password}/>
                    </div>
                    {error? <span className='errores'>{error}</span>:""}
                    <div className='form-group'>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default LoginForm;