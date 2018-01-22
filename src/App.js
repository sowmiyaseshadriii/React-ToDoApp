import React, { Component } from 'react';
import AddTaskList from './components/addtask';
import ToDoAppList from './components/applist';
import './App.css';
class App extends Component {
  constructor(props){
    super();
    this.state={  tasks: props.tasks  };
    this.updateList=this.updateList.bind(this);
    this.removeTask=this.removeTask.bind(this);
  }

  updateList(text){
    if(text!==''){
      var updatedTasks=this.state.tasks;
      updatedTasks.unshift(text);
      this.setState({tasks: updatedTasks});
      this.updateLocalStorage(updatedTasks);
     
    }
   else{
    alert('Please Enter the Task!!!');
  }
  }
  removeTask(text){
    var updatedTasks=this.state.tasks;
    updatedTasks.splice(updatedTasks.indexOf(text),1);
    this.setState({tasks: updatedTasks});
    this.updateLocalStorage(updatedTasks);
  }

  updateLocalStorage(updatedTasks){
    console.log('Tasks got Saved!!!');
    localStorage.setItem('storedTasks',JSON.stringify(updatedTasks));
  }
  render() {
    return (
      <div className="App container">
        <div className="header">
        <h1>ToDo App</h1>
        <AddTaskList updateList={this.updateList}  />
        </div>
        <ToDoAppList tasks={this.state.tasks} remove={this.removeTask}/>
      </div>
    );
  }
}

export default App;
