import React, { useState,createContext } from 'react';

const ContextoAdmin = createContext();

const ProvedorAdmin =({children})=>{
    const [actualizar,setActualizar]=useState(false);

    return (
        <ContextoAdmin.Provider value={{actualizar,setActualizar}}>
            {children}
        </ContextoAdmin.Provider>
    )
}


export {ContextoAdmin,ProvedorAdmin};