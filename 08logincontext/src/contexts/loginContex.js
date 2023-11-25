import { createContext, useContext } from "react";

export const LoginContext =  createContext({
    username : "",
    password : "",
    setUsername : () => {},
    setPassword : () => {}

})

export default function useLogin () {
     return useContext(LoginContext)
}
 
export const LoginProvider = LoginContext.Provider