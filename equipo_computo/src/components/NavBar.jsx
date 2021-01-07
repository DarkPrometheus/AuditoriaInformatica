import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="Titulo">
                <Link className="" to={"/"}>CC</Link>
                <div>
                    <p>Computer</p>
                    <p>Center</p>
                </div>
            </div>
            <div className="Navegacion">
                <Link className="" to={"/Plano"}>Plano</Link>
                <Link className="" to={"/NormasUso"}>Normas de uso</Link>
                <Link className="" to={"/Computadoras"}>Computadoras</Link>
            </div>
            <div>

            </div>
        </div>
    )
}
