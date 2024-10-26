import React from 'react'

function IsVisible ({isvisible}) {
    return (
        <div>
            {isvisible ? <p className='paragrafo'>É visível!</p> : null}
        </div>
    )
}

export default IsVisible