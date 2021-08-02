import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="mb-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Inicio</Link>
                    </li>
                    <li >
                        <Link className="nav-link" to="/profesionales">Profesionales</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}