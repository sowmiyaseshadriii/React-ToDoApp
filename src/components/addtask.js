import React, { Component } from 'react';

class AddTaskList extends Component {
    constructor(props){
      super();
      this.justSubmitted=this.justSubmitted.bind(this);
    }

justSubmitted(event){
  event.preventDefault();
  var input=event.target.querySelector('input');
  var value=input.value;
  input.value='';
  this.props.updateList(value);
}

    render() {
      return (
        
        <form onSubmit={this.justSubmitted} >
            <input type="text" placeholder="Enter Tasks..."/>
             <button type="submit" className="addBtn">Add</button>
        </form>
      
      );
    }
  }
  
  export default AddTaskList;