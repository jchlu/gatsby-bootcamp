import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

export default _ => <Layout>
  <Head title='home' />
  <h1>Welcome to exito.tech</h1>
  <h2>The site for jchlu, web developer out of Las Terrenas, DR</h2>
  <p>Need a developer? <Link to='/contact'>Contact Me</Link></p>
</Layout>