import React, {useState} from 'react';
import Imagem from '../Imagem/Imagem';
import './Book.css'

const Book = ( props ) => {
    return(
        <div className="Book" onClick={props.click}>
            <p>{props.name}</p>
            <p>{props.author}</p>
            <p>{props.pages}</p>
            <p>{props.children}</p>
            <Imagem/>
        </div>
    );
}

export default Book;