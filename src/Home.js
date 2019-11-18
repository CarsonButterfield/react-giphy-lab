// Developer TODO: Define App component defintion here
import React, {Component} from 'react'
import SearchContainer from './Search/SearchContainer'
import Results from './Results/Results'
class App extends Component{
    constructor(props) {
        super(props)
        console.log('constructed');
        this.state = {
          page: 'home',
          gifs:[],
        }
      }

  
  render(){
    console.log('rendered')
    return(
      <section>
      <SearchContainer/>
      </section>
    )}
}


export default App