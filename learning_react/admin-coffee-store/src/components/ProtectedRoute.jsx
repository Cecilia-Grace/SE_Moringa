import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) {
        return (
            <div className="auth-text">
                <h2>Access Denied</h2>
                <p>Kindly login first to view</p>
                <br />
                <Link to="/" >
                    Go to Login
                </Link>
            </div>
        )
    }
    return children
}

export default ProtectedRoute