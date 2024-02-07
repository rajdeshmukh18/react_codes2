import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Raj",
      age: 22
    };
  }
nameChangeHandler()
{
    this.setState({name:"Smita"},()=>{
        console.log(this.state);
    });
}
handleAgeIncrement = () => {
    this.setState(prevState => ({
      age: prevState.age + 1
    }));
};
  render() {
    return (
      <div>
        <h1>
          <i>Dear {this.state.name}, {this.state.age} years</i>
        </h1>
        <button onClick={()=> this.nameChangeHandler()} >Click me</button>
        <button onClick={()=> this.handleAgeIncrement()}>Increment Age(Class)</button>
      </div>
    );
  }
}

export default Person;
