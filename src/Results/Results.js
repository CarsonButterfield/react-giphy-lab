import React from 'react'

import Result from './Result/Result'
import {data} from './testdata.json'


const Results = props => {
    const arr = []
    props.gifs.forEach(gif => {
        arr.push(<Result gif={gif} key={gif.id}/>)
    });
    console.log({arr})
    return(
        <div className="gif-list">{arr}</div>
    )
}

export default Results