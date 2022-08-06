import React, { Component } from 'react';
import { renderMatches } from 'react-router-dom';
import GoogleMaps from "simple-react-google-map";

import styled from 'styled-components';

/*export default class Maps extends Component {
    render() {
        return(
            <div className='container'>
                
            </div>
        );
    } 
}*/



const Map = (props) => {
    return(

        <div className='container'>
            <Titulo>CONTACTENOS</Titulo>
            <Tl>QUEREMOS RECORDARLES QUE TRATAMOS DE BRINDARLE EL MEJOR SERVCIO TANTO EN EL LOCAL COMO EN SU DOMICILIO</Tl>
            <p>Para mayor infromacion puede comunicarse con nossotros al 03873-586954</p>
            <Pl>PUEDE UBICARNOS ENTRE ALVARADO Y ALBERTI, LAVALLE AL 3100 </Pl>
            
        </div>
        

    )
}
export default Map



const Titulo = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: upprcase;
    margin-bottom: 10px;

`;
const Tl = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: upprcase;
    margin-bottom: 10px;

`;
const Pl = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: upprcase;
    margin-bottom: 10px;

`;
