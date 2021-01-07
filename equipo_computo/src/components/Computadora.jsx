import React from 'react'
import {
    Link
} from "react-router-dom";

export const Computadora = ({ data }) => {
    let delay = "pc animate__animated animate__fadeInLeft"
    return (
        <div className={delay}>
            <div className="TitleTopContainer">
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
            </div>
            <img src={data.img} alt="" />
        </div>
    )
}
