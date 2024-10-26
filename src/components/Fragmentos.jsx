import React from 'react';

function Fragmentos() {
    const itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    return (
        <>
            <h1>Lista de Itens</h1>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Fragmentos
