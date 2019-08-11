import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

export default ({ children }) => <div className={layoutStyles.container}>
  <div className={layoutStyles.content}>
    <Header />
    {children}
  </div>
  <Footer />
</div>