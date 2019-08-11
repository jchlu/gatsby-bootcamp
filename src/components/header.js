import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import headerStyles from './header.module.scss'

export default _ => <header className={headerStyles.header}>
  <h1>
     <Link className={headerStyles.title} to='/'>éxito.tech</Link>
  </h1>
  <Nav />
</header>