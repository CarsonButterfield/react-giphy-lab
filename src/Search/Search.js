import React,{Component} from 'react'
import './Search.css'

const Search = (props) => {   
    return(
        <form>
            <input onChange={e => {props.updateQuery(e.target.value); props.func()}}id="query" type="text"/>
            
        </form>)}





export default Search