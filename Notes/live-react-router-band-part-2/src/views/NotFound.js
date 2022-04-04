import React from "react";
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 Error - Page Not Found!</h1>

            <Link className="back-link" to="/">Back to Home</Link>
        </div>
    )
}

export default NotFound;