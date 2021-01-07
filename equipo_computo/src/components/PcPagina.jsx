import React from 'react'
import { Link } from "react-router-dom";

export const PcPagina = (data) => {
    console.log(data.location.state.data)
    let datos = data.location.state.data;
    return (
        <div className="PcPagina">
            <div className="PcPaginaContainer animate__animated animate__fadeInDown Color1">
                <div className="TitleTopContainer">
                    <h3 className="nombre">{datos.name}</h3>
                </div>
                <img src={datos.img} alt="" />
                <h4>Caracteristicas</h4>
                <div className="Dato">
                    <p><b>Marca:</b></p>
                    <p>{datos.Marca}</p>
                </div>
                <div className="Dato">
                    <p><i className="fab fa-windows"></i><b>Sistema operativo:</b></p>
                    <p>{datos.Sis}</p>
                </div>
                <div className="Dato">
                    <p><i className="fas fa-microchip"></i><b>Procesador:</b></p>
                    <p>{datos.procesador}</p>
                </div>
                <div className="Dato">
                    <p><i className="fas fa-memory"></i><b>RAM:</b></p>
                    <p>{datos.ram}</p>
                </div>
                <div className="Dato">
                    <p><i className="fas fa-hdd"></i><b>Disco duro:</b></p>
                    <p>{datos.DD}</p>
                </div>
                <div className="Dato">
                    <p><i className="fas fa-ethernet"></i><b>Puertos:</b></p>
                    <p>{datos.Puertos}</p>
                </div>
                <div className="Dato">
                    <p><i className="fas fa-chess-board"></i><b>Tarjeta grafica:</b></p>
                    <p>{datos.tarjetaGrafica}</p>
                </div>
                <div className="Dato">
                    <p><i className="fas fa-desktop"></i><b>Pantalla:</b></p>
                    <p>{datos.Pantalla}</p>
                </div>
                <div className="Dato">
                    <p><i className="fab fa-megaport"></i><b>Conectividad:</b></p>
                    <p>{datos.Conectividad}</p>
                </div>
                <div className="Dato">
                    <p><b>Otros:</b></p>
                    <p>{datos.Otros}</p>
                </div>
                <Link className="bottom" to={"/"}> Regresar</Link>
            </div>
        </div>
    )
}
