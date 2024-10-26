import React from 'react'

function Imagens ({imagens}) {
    return (
        <div className='imagens'>
            {imagens
                .filter((url) => url)
                .map((url, index) => (
                <img key={index} src={url} alt={`Imagem ${index + 1}`} />
            ))}
        </div>
    )
}

export default Imagens