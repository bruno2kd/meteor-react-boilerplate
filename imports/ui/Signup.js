import React, { Component } from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';



export default class Signup extends Component {
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

    if (password.length < 6) {
      return this.setState({error: "Password deve ser maior que 6 characteres"})
    }

    Accounts.createUser({email, password}, (err) => {
      if (err) {
        let erro = err.reason
        this.setState({error: erro})
      } else {
        this.setState({error: ""})
      }
    })
  }



  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password1" name="password" placeholder="Password"/>
            {/* <input type="password" ref="password2" name="password2" placeholder="Repeat the password"/> */}
            <input className="button" type="submit" name="submit" placeholder="Submit"/>
          </form>

          <Link to="/">Already have an account?</Link>
        </div>
      </div>
    )
  }
}
