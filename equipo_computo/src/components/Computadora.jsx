import React from 'react'
import {
    Link
} from "react-router-dom";

export const Computadora = ({ data }) => {
    let delay = "pc animate__animated animate__fadeInLeft Color1"
    return (
        <div className={delay}>
            <Link
                className="nombre"
                to={{
                    pathname: "/" + data.name,
                    state: {
                        data: data
                    }
                }}>
                {data.name}
            </Link>
            <img src={data.img} alt="" />
        </div>
    )
}
