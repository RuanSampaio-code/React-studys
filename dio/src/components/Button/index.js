import React from 'react'

export default function Button(props) {
    /* desestruturando */
    const { title } = props;

    return (
        <button> {title} </button>      
    )
}
