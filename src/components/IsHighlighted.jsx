import React from 'react'

function IsHighlifhted({ mudarcor }) { 
    return (
        <div>
            {mudarcor ? (
                <p style={{ color: 'red', fontSize: '20px', fontWeight: 'bold', fontFamily: 'Poppins' }}>
                    Lorem ipsum dolor sit amet.
                </p>
            ) : (
                <p style={{ fontSize: '20px' }}>
                    Lorem ipsum dolor sit amet.
                </p>
            )}
        </div>
    );
}

export default IsHighlifhted
