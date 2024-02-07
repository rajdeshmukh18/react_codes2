import { Component } from "react";
import React from "react";
class MyForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        email: '',
        password: ''
      };
    }
  
    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted:', this.state.username,this.state.email,this.state.password);
      alert(this.state.username+""+this.state.email+""+this.state.password);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
        <button type="submit">Submit</button>
          
        </form>
      );
    }
  }
  export default MyForm;
  