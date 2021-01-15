import React from 'react';
import './App.css';


const Livro = (props) => {
    return (
        <>
            <p>Esse elemento representa um livro</p>
            <Livro name="A descoberta do mundo" author="Clarice Lispector" pages="480">Esse Livro é muito bom </Livro>

        </>
    )
}
export default Livro;