import React, {Component} from 'react'
import Search from './Search'
import axios from 'axios'
import Results from '../Results/Results'
import './Search.css'
class SeachContainer extends Component{
    constructor(props){
        super(props)
        this.state= {
            gifs:[],
            query:""
        }
    }
    updateQuery = (query)=>{
        
        this.setState({
            query
        }

        )
    }

    getGiphs = () => {
        axios.get('http://api.giphy.com/v1/gifs/search', {
            params: {
                api_key:'xwzPNKeVD6b54R72YGkJOyf1tRQmu9Hf',
                q:this.state.query,
               

            }
        })
        .then((res) => {
            this.setState({
                gifs: res.data.data
            });
            console.log(this.state.gifs)
        })
    
    
    
    }

    render(){
        
        return(
            <div>
            <Search updateQuery={this.updateQuery} func={this.getGiphs}/>
           
            {this.state.gifs.length > 0 && <Results gifs={this.state.gifs}/>}
            
            </div>
        )
    }
}

export default SeachContainer