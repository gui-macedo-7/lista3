import React from 'react'

const Lista = ({ nomes }) => {
    return (
        <div>
            <h1 className='titulo'>Lista de nome</h1>
            <ul className='lista'>
                {nomes.map((nome, index) => (
                    <li key={index} >{nome}</li>
                ))}
            </ul>
        </div>
    )
}

export default Lista