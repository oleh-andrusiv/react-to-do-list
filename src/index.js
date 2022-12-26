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
      inputValue: "",
      }
    })
  }

  addInputValue =(event)=>{
    this.setState({inputValue:event.target.value})
  }

  changeToDoState = (event) => {
    event.preventDefault();

    const clickedElem = event.currentTarget;
    const elemID = clickedElem.getAttribute('id')
    console.log(clickedElem)
    console.log(elemID)

    if (event.target.classList.contains('todo-list_item_btn')) {

      this.setState((prevState) => {

        const newToDoList = [ ...prevState.toDoList ];
        console.log(newToDoList)

        if (event.target.classList.contains("close-btn")) {
          newToDoList.splice(elemID, 1);
        }
        
        // if (event.target.classList.contains("done-btn")) {
          
        // }

        return {
          ...prevState,
          toDoList: newToDoList,
        };
      });
    }
  };

  render () {
    console.log(this.state.toDoList)
     return (
    <div className="todo-list">
      <h1 className='todo-list_header header'>To do list</h1>
      <h2 className='todo-list_header2 header'>Add todo</h2>
      <div className='todo-list_action'>
        <input className='todo-list_input' type="text" placeholder="Add new todo" onChange={this.addInputValue} value={this.state.inputValue}></input>
        <button className='todo-list_submit' onClick={this.addToDo}> Submit </button>
      </div>
      <ul>
        {this.state.toDoList.map((el)=>{
          return (
            <li className='todo-list_item' onClick={this.changeToDoState} key={el.text} id={this.state.toDoList.indexOf(el)}>
              <span className={`todo-list_item_text`}>{el.text}</span>
              <div className='todo-list_item_control'>
                <button className='todo-list_item_btn done-btn'>&#9989;</button>
                <button className='todo-list_item_btn close-btn'>&#10060;</button>
              </div>
            </li>
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