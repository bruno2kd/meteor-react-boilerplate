import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';


import PrivateHeader from './PrivateHeader';


export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard" />
      <div className="page-content">
        <h2>Dashboard page content</h2>
      </div>
    </div>
  )
}
