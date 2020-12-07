
import React from "react";
import { connect } from "react-redux";

import Login from '../components/Login'
import { userLogin } from '../action-creators/userlogeado'

const mapDispatchToProps = (dispatch) => {

  return {
    logginUser: (user) => dispatch(userLogin(user))

  }

}

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    this.props.logginUser(this.state)
      // Axios.post('/api/login', this.state)
      .then(() => 2)
    return this.props.history.push('/movies')
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value })

  }

  handleChangeEmail(e) {

    this.setState({ email: e.target.value })

  }
  render() {
    return (
      <div>
        <Login
          handleSubmit={this.handleSubmit}
          handleChangePassword={this.handleChangePassword}
          handleChangeEmail={this.handleChangeEmail}
        />
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(LoginContainer)