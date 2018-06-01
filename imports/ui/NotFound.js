import React from 'react';
import { Link } from 'react-router';



const NotFound = () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>
        <p>Not able to find your page</p>
        <Link to="/" className="button button--link">Back to Home</Link>
      </div>
    </div>
  )
}

export default NotFound;
