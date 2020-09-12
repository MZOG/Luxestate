import React from "react"

function Container({children, additionalClass}) {
    return (
        <div className={`container ${additionalClass ? additionalClass : ""}`}>
            {children}
        </div>
    )
}

export default Container;