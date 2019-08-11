import React from 'react'
import { Link } from 'gatsby'

export default _ => <nav>
  <ul>
    <li><Link to='/'>home</Link></li>
    <li><Link to='/about'>about</Link></li>
    <li><Link to='/blog'>blog</Link></li>
    <li><Link to='/contact'>contact</Link></li>
  </ul>
</nav>