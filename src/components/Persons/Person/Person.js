import React, {Component} from 'react';
import './Person.css';

class Person extends Component{
    render(){
        return(
            <div className="Person">
                <p >Name is : {this.props.name} age is {this.props.age}</p>
                <button onClick={this.props.delete}>Delete</button>
                <input onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
    
}

export default Person;