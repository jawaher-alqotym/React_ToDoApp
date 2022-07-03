import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
 state = {
     tasks: []
   }
 AddTask=(event)=>{
   event.preventDefault();
   let new_list = this.state.tasks
   new_list.push(this._inputElement.value)
   this.setState({tasks:new_list})

 }

 render(){
   let To_Do = this.state.tasks.map((task)=>{
        return <li>{task}</li>});
   return (
    <div className="App">
     <div className='to_do_list'>
      <h1>To Do List</h1>
      <form onSubmit={this.AddTask}>
        <input type="text"  ref={(a)=> this._inputElement =a}/>
        <input type="submit" value="Submit"/>
      </form>
      <hr/>
      {To_Do}
     </div>

    </div>)
  }

}

export default App;
