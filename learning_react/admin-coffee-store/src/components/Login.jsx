import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const {login} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()

        const success = await login(name, password)
        if (success) {
            setName('')
            setPassword('')

        }else {
            setError('Invalid credentials')
        }
    }

    return(
        <div className="login-container">
            <h1 className="login-text">Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input 
                    type="text"
                    placeholder="Username"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />

                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />

                <button type="submit">Login</button>
                    
            </form>
            <p>{error}</p>
        </div>
        
    )
}

export default Login