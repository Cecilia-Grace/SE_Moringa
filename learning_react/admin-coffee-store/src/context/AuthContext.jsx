import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

function AuthProvider({children}) {
    const [admin, setAdmin] = useState(null)
    
    async function login(name, password) {
        const response = await fetch(`http://localhost:3000/admins?name=${name}&password=${password}`)
        const data = await response.json()

        if (data.length > 0) {
            setAdmin(data[0]) 
            return true       
        }else {
            setAdmin(null)
            return false      
        }
    }

    function logout() { 
        setAdmin(null)
    }

    return(
        <AuthContext.Provider value={{admin, isAuthenticated: !!admin, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

export default AuthProvider