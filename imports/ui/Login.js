import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password1.value.trim();

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        let erro = err.reason
        this.setState({
          error: erro
        })
      } else {
        this.setState({
          error: ""
        })
      }
    })
  }


  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Login</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password1" name="password" placeholder="Password"/>
            <input className="button" type="submit" name="submit" placeholder="Login" />
          </form>
          <Link to="/signup">Have an account</Link>
        </div>
      </div>

    )
  }
}
