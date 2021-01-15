import React, {useState} from 'react';
import imagem from './Fotos/imagem.jpg'

const Imagem = ( props ) => {
    return(
        <img src={imagem} alt="Imagem não carregada" width="500" height="600"></img>
    );
}

export default Imagem;