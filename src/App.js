import './App.css';

class App extends React.Component {
  constructor (){
    super();
    this.state={
    toDoList:[], 
    inputValue:" ",         
    }
  }
  addToDo =()=>{
    const item={
      text:this.state.inputValue,
      isDone:false,
    }
    
    this.setState((prevState)=>{
      const newToDoList =prevState.toDoList.slice()
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
    <div className="App">
      <input type="text" placeholder="Enter please to do" onChange={this.addInputValue} value={this.state.inputValue}></input>
      <button onClick={this.addToDo}> Submit </button>
      <ul>
        {this.state.toDoList.map((el)=>{
          return (
            <li>{el.text}</li>
          )

        })}
      </ul>
    </div>

  );
}
}

export default App;