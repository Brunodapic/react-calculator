import React from 'react'

function Header({result,input}) {
    return (
        <div className="inputArea">
            <form>
                <input type="text" value={!result ? input : 'error!!!'}  />      
            </form>
        </div>
    )
}

export default Header
