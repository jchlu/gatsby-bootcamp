import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

export default _ => <Layout>
<Head title='404' />
<h1>Page not Found</h1>
<p><Link to={'/'}k>Head Home</Link></p>
</Layout>