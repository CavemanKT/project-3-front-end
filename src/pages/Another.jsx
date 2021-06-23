import React from 'react'
import { Link } from 'react-router-dom'

const PagesAnother = () => (
  <div id="pages-another" className="container">
    <header className="text-center border-bottom">
      <h1>Another Page</h1>
      <p><Link to="/">Home Page</Link></p>
    </header>
  </div>
)

export default PagesAnother
