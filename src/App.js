// Developer TODO: Define App component defintion here
import React, {Component} from 'react'

class App extends Component{
    constructor(props) {
        super(props)
        console.log('constructed');
        this.state = {
          page: 'home',
        }
      }

render(){
    console.log('rendered')
    return(
        <p>hello world </p>
    )}
}


export default App