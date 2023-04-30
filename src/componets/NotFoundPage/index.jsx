import React from 'react'
import { Link } from 'react-router-dom'
import './notFoundPage.css'
const NotFoundPage = () => {
  return (
    <div className="container not-found text-center text-danger mx-auto my-5 p-4">
    <h1 className="display-4 ladder">
       <div className="step step1">4</div>
        <div className="step step2">0</div>
        <div className="step step3">4</div>
      </h1>
    <p className="lead">Oops! This page is under construction.</p>
    <Link to='/'>
      <button type="button" className="btn btn-secondary">Go Back</button>
    </Link>
  </div>
  )
}

export default NotFoundPage