import React, { Component } from 'react';

class ToDoAppList extends Component {
    constructor(){
      super();
      this.remove=this.remove.bind(this);
    }


    remove(elem){
      var value=elem.target.parentNode.querySelector('span').innerText;
      this.props.remove(value);
    }
    render() {        
        var items=this.props.tasks.map((elem,i) => {
             return <li key={i}><span>{elem}</span><button onClick={this.remove} className="close">&times;</button></li>
        });
        
      return (
        <ul>
           {items}
        </ul>
      );
    }
  }
  
  export default ToDoAppList;