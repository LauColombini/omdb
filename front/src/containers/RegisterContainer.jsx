import Axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Register from '../components/Register'

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }
 handleSubmit(e) {
    e.preventDefault();    
    console.log('funciono')
    Axios.post('/api/register', this.state)
    .then(()=>console.log('User Created'))
    return this.props.history.push('/login')
 }
 handleChangePassword(e) {
    this.setState({password: e.target.value})
    console.log('funciono password')
  }

  handleChangeEmail(e) {
    console.log('holi')
    this.setState({email: e.target.value})
    console.log('funciono email')
  }
  render() {
    return (
      <div>
        <Register          
          handleSubmit={this.handleSubmit}
          handleChangePassword={this.handleChangePassword}
          handleChangeEmail={this.handleChangeEmail}
        />
      </div>
    );
  }
}
export default RegisterContainer
