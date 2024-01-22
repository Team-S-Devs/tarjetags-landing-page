import React from "react";

import "../../styles/Home/TimeLineSteps.css";
import { BsPerson } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import StartButton from "./StartButton";

const TimeLineSteps = () => {
    return (
        <div className="section-timeline">
            <div className="container">
                <h4>Crea Tu Tarjeta en Pocos Pasos</h4>
                <div className="container-row-timeline">
                    <div className="line-timeline"></div>
                    <div className="box-text-t">
                        <div className="circle-timeline"><span>1</span></div>
                         <div className="boxIcon">  <BsPerson className="icon-timeline" /> </div>
                        <div className="separator-t"></div>
                        <div className="time-body">
                            <h5 className="title-box-t"> Inicia Sesion</h5>
                            <p className="text-detail-time">
                                Proporciona tus datos personales,
                                informacion de tu area y comienza a crecer
                            </p>
                        </div>
                    </div>

                    <div className="box-text-t">
                        <div className="circle-timeline"><span>2</span></div>
                        <div className="boxIcon">  <BsPencilSquare className="icon-timeline" /> </div>
                        <div className="separator-t"></div>
                        <div className="time-body">
                            <h5 className="title-box-t" > Personaliza</h5>
                            <p className="text-detail-time">
                            Elige el color y estilo que te representa, agrega tus redes sociales y formas de contacto
                            </p>
                        </div>
                    </div>

                    <div className="box-text-t">
                        <div className="circle-timeline"><span>3</span></div>
                        <div className="boxIcon">  <BsShop className="icon-timeline" /> </div>
                        <div className="separator-t"></div>
                        <div className="time-body">
                            <h5 className="title-box-t"> Agrega servicios</h5>
                            <p className="text-detail-time">
                            Agrega los servicios que brindas, imagenes, botones adicionales y mas
                            </p>
                        </div>
                    </div>

                    <div className="box-text-t">
                        <div className="circle-timeline"><span>4</span></div>
                        <div className="boxIcon"> <BsShare className="icon-timeline" /></div>
                        <div className="separator-t"></div>
                        <div className="time-body">
                            <h5 className="title-box-t"> Comparte</h5>
                            <p className="text-detail-time">
                            Comparte tu tarjeta con el mundo a traves de link o QR
                            </p>
                        </div>
                    </div>  
                </div>
                <div className="button-container-t">
                    <StartButton />
                </div>
            </div>
        </div >
    )
}

export default TimeLineSteps;