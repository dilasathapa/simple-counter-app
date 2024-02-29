import React, { Component } from 'react'
import './App.css'
import Multiple from './Multiple'

class App extends Component{
  // constructor(){
  //   super()
    state = {
      count : 0,
    }
  // }

  Increment =() =>{
    this.setState({count : this.state.count+1})
  }
  Decrement =() =>{
    if(this.state.count > 0){

      this.setState({count : this.state.count-1})
    }
  }

  Resetvalue =()=>{
    this.setState({count : 0})
  }

  render(){
    console.log(this.state)
    return (
      <>
        <div >
          <h1>Counter App</h1>
          <h3>Count : {this.state.count}</h3>&nbsp;&nbsp;&nbsp;
          <button onClick={this.Increment}>+</button> &nbsp;&nbsp;&nbsp;
          <button onClick={this.Decrement}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.Resetvalue}>Reset</button>
        </div>
        <Multiple passedValue={this.state.count}/>
      </>
    )
  }
}

export default App;


