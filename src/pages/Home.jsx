import React from 'react'
import { Link } from 'react-router-dom'

const PagesHome = () => (
  <>
    <h1>Home Page</h1>
    <p><Link to="/another">Another Page</Link></p>
  </>
)

export default PagesHome
