import { createContext, useContext } from "react";

const UserContext =createContext()

const UserContextProvider = UserContext.Provider

const useData = ()=>{
    return useContext(UserContext);
}

export { UserContext, UserContextProvider, useData };