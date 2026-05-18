import Login from "./Login"
import { useAuth } from "../context/AuthContext"

function Home() {
    const { isAuthenticated, admin } = useAuth()
    const {logout} = useAuth()

    return(
        <div className="homeView">
            {isAuthenticated ? (
                <div className="login-welcome-text">
                    <h1>Welcome Back, {admin?.name}!</h1>
                    <h2>Brewing Operations, One Click at a Time ☕</h2>
                    <p>Use the navigation bar above to manage your shop inventory or view products</p>
                    <button 
                        onClick={() => {
                            logout()
                            alert("You've logged out successfully! 👋")
                        }}>
                        Logout
                    </button>
                </div>
            ) : (
                <div className="welcome-text">
                    <h1>Welcome</h1>
                    <h2>Brewing Operations, One Click at a Time ☕</h2>
                    <br />
                    <Login />
                </div>
            )}
        </div>
    )
}

export default Home