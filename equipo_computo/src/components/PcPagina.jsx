import React from 'react'
import {
    Link
} from "react-router-dom";

export const PcPagina = (data) => {
    console.log(data.location.state.data)
    let datos = data.location.state.data;
    return (
        <div className="PcPagina Color3">
            <div className="PcPaginaContainer animate__animated animate__fadeInDown Color1">
                <h3 className="nombre">{datos.name}</h3>
                <img src={datos.img} alt="" />
                <h4>Caracteristicas</h4>
                <div className="Dato">
                    <p><i class="fas fa-microchip"></i>Procesador:</p>
                    <p>{datos.procesador}</p>
                </div>
                <div className="Dato">
                    <p><i class="fas fa-memory"></i>RAM:</p>
                    <p>{datos.ram}</p>
                </div>
                <div className="Dato">
                    <p><i class="fas fa-chalkboard"></i>Tarjeta madre:</p>
                    <p>{datos.tarjetaMadre}</p>
                </div>
                <div className="Dato">
                    <p><i class="fas fa-chess-board"></i>Tarjeta grafica:</p>
                    <p>{datos.tarjetaGrafica}</p>
                </div>
                <div className="Dato">
                    <p><i class="fas fa-tools"></i>Ultimo mantenimiento:</p>
                    <p>{datos.ultimoMantenimiento}</p>
                </div>
                <Link className="bottom" to={"/"}> Regresar</Link>
            </div>
        </div>
    )
}
