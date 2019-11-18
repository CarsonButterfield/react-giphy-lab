import React from 'react'
import './result.css'
const Result = props => {
 const {gif} = props
    return (
        <div className="gif-container">
    <img className="gif" src={gif.images.downsized.url} alt="gif"/>
    </div>
    )
}

export default Result