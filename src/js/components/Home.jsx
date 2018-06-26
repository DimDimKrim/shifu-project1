import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <p>Main Page</p>
      <Link to="/admin">admin</Link>
    </div>
  )
}
