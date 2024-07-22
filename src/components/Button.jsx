import React from 'react'

export default function Button(props) {
    const { text,func } = props
    return (
        <button onClick={func} className='px-8 py-4 rounded-md border-3 border-solid border-red-500 bg-slate-950 redShadow duration-200 mx-auto'><p>{text}</p></button>
    )
}
