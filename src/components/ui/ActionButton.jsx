import React from 'react'

const ActionButton = (props) => {
    const { label, primary, ...rest } = props;
    const className = primary ? "btn btn-primary" : "btn btn-outline-primary";
    return (
        <button className={`${className} ms-2`} {...rest}>
            {label}
        </button>
    )
}

export default ActionButton
