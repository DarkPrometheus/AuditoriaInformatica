import React from 'react';
import { imagenes } from './../Services/imgs';

export const Plano = () => {

    return (
        <div className="Plano">
            <p>En el plano se cuenta con 8 Computadoras de escritorio las cuales están conectadas a un Switch y al mismo tiempo a un modem.</p>
            {
                imagenes.map(a => {
                    return <img key={a.plano} src={a.plano} alt="Plano" className="imgPlano" />
                })
            }
            <p>La siguiente imagen muestra la topología usada de acuerdo a la red, como podemos apreciar el router se encuentra conectado a un switch, así mismo provee la red a las distintas computadoras.</p>
            {
                imagenes.map(a => {
                    return <img key={a.topologia} src={a.topologia} alt="topologia" className="imgTopologia" />
                })
            }
        </div>
    )
}
