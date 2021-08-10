import React from 'react';
var stringMath = require('string-math');
 

function Button({name,text,onClick}) {

    const isNum =(equ) =>{
        try{
            var num=stringMath(equ);
            return true;
        }catch(error){
            return false;
        }


    }
     
    /*const wide=((name==="zero") ? "9":"5");

    const circl=((name==="zero") ? "25":"50");*/

    const wide="5";
    const circl="50"
    const color=((isNum(text) ? "orange" : "white"));


    const myStyle={
        backgroundColor : color,
        width: wide+"rem",
        borderRadius: circl+"%",
    }
    return (
        <div className="buttonWrap">
            <button onClick={()=>onClick({text})}  className="button" style={myStyle}>
                {text}
            </button>
        </div>
    )
}




Headers.defaultProps={
    color:"orange",
}

export default Button
