import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base'
import PropTypes from 'prop-types';



const PrivateHeader = (props) => {
  const logout = () => {
    Accounts.logout();
  }
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{this.title}</h1>
        <button
          className="button button--link-text"
          onClick={logout}
          >Logout</button>
      </div>
    </div>

  )
}

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};


export default PrivateHeader;
