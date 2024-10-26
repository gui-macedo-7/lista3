// src/components/Card.js
import React from 'react';

function Card() {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '10px'
        }}>
            <h2>Título do Card</h2>
            <p>Este é um exemplo de conteúdo dentro do Card. Você pode adicionar qualquer coisa aqui!</p>
        </div>
    );
}

export default Card;
