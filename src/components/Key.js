import React from 'react'
import Button from './Button'


function Key({name,text,onChange}) {

    

    return (
        <div className={name}>
            <Button name={name} text={text} onClick={onChange} />
        </div>
    )
}

export default Key
