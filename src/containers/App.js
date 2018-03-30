import React, { Component } from 'react';
import './App.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons:[
      {id:1, name:"Naresh", age:26},
      {id:2, name:"Yahoo", age:28},
      {id:3, name:"Google", age:265}
    ],
    togglePersons:false
  }
  onChangeHandler = (e, id) =>{
    let cPerson = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    let copyPersons = [...this.state.persons];
    copyPersons[cPerson].name = e.target.value;
    this.setState({
      persons:copyPersons
    })
  }

  deletePerson = (index) =>{
   let persons = [...this.state.persons]
   persons.splice(index, 1);
   this.setState({persons});
  }

  togglePersonsHandler = () =>{
    this.setState({togglePersons: !this.state.togglePersons});
  }
  render() {
    let persons = null;
    if(this.state.togglePersons){
      persons = <Persons 
        persons={this.state.persons}
        delete= {this.deletePerson}
        changed= {this.onChangeHandler} />
    }
    return (
      <div className="App">
        <Cockpit toggle={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
