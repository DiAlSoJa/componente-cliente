import { useEffect ,useState} from "react";
import { Outlet,Navigate} from "react-router-dom";

const PrivateRoute = ({url}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [verificar,setVerificar] = useState(false);
    useEffect(()=>{
        const token = localStorage.getItem("x-token");
        if(token){
            fetch(url+"admin/me",{
                headers:{
                    "Content-Type": "application/json",
                    "x-token": token
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data._id){
                    setIsAuthenticated(true);
                    setVerificar(true);
                }
                else {
                    setIsAuthenticated(false);
                    localStorage.removeItem("x-token");
                    setVerificar(true);

                }
            })
        }else{
            setIsAuthenticated(false);
            setVerificar(true);
        }
    },[url]);

    
    if(verificar){
        if (isAuthenticated) {
          return <Outlet></Outlet>;
        } else {
            return <Navigate to="/login" />;
          
        }

    }
};
 
export default PrivateRoute;