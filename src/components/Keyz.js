import React from 'react'
import Key from './Key'


function Keyz({ onChange }) {
    return (
        <div className="keyzArea">
            <Key name={"AC"} text={"AC"} onChange={onChange} />
            <Key name={"brackets1"} text={"("} onChange={onChange} />
            <Key name={"brackets2"} text={")"} onChange={onChange} />
            <Key name={"Procent"} text={"ANS"} onChange={onChange} />
            <Key name={"divided"} text={"/"} onChange={onChange} />
            <Key name={"seven"} text={"7"} onChange={onChange} />
            <Key name={"eight"} text={"8"} onChange={onChange} />
            <Key name={"nine"} text={"9"} onChange={onChange} />
            <Key name={"times"} text={"*"} onChange={onChange} />
            <Key name={"four"} text={"4"} onChange={onChange} />
            <Key name={"five"} text={"5"} onChange={onChange} />
            <Key name={"six"} text={"6"} onChange={onChange} />
            <Key name={"minus"} text={"-"} onChange={onChange} />
            <Key name={"one"} text={"1"} onChange={onChange} />
            <Key name={"two"} text={"2"} onChange={onChange} />
            <Key name={"three"} text={"3"} onChange={onChange} />
            <Key name={"plus"} text={"+"} onChange={onChange} />
            <Key name={"zero"} text={"0"} onChange={onChange} />
            <Key name={"dot"} text={"."} onChange={onChange} />
            <Key name={"equals"} text={"="} onChange={onChange} />
        </div>
    )
}

export default Keyz