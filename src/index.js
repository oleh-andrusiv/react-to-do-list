import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

class App extends React.Component {
  constructor () {
    super();
    this.state={
    toDoList:[], 
    inputValue:"",         
    }
  }
  addToDo = () => {
    const item={
      text:this.state.inputValue,
      isDone:false,
    }
    
    this.setState((prevState)=>{
      const newToDoList = prevState.toDoList.slice()
      newToDoList.push(item)
            return{
      ...prevState, 
      toDoList: newToDoList,
      
      }
    })

   }
  addInputValue =(event)=>{
     this.setState({inputValue:event.target.value})
  }

  render (){
     return (
    <div className="todo-list">
      <h1 className='todo-list_header header'>To do list</h1>
      <h2 className='todo-list_header2 header'>Add todo</h2>
      <div className='todo-list_action'>
        <input className='todo-list_input' type="text" placeholder="Add new todo" onChange={this.addInputValue} value={this.state.inputValue}></input>
        <button className='todo-list_submit' onClick={this.addToDo}>Submit</button>
      </div>
      <ul>
        {this.state.toDoList.map((el)=>{
          return (
            <li className='todo-list_item' key={el}>{el.text}</li>
          )
        })}
      </ul>
    </div>

  );
}
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);