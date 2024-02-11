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
        <center>
        <div style={{ height: '100px', width: '200px', background: 'white' }}>
        <form onSubmit={this.handleSubmit}>
          <center>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" /> <br/>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" /> <br/>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" /> <br/>
        <button type="submit">Submit</button>
        </center>
        </form>
        </div>
        </center>
      );
    }
  }
  export default MyForm;
  