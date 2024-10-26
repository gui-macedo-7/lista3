// src/components/ImagensComTextoAlternativo.js
import React from 'react';

function ImagensComTextoAlternativo({ imagens }) {
    return (
        <div className="imagens">
            {imagens.map((imagem, index) => (
                <img 
                    key={index} 
                    src={imagem.url} 
                    alt={imagem.altText} 
                    style={{ width: '100px', height: '100px', margin: '10px' }} 
                />
            ))}
        </div>
    );
}

export default ImagensComTextoAlternativo;
