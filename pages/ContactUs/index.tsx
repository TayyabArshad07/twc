import React from 'react'
import ContactUs from '../components/ContactUs'
import Layout from '../components/Layout'
import Head from 'next/head'

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact || TWC</title>
      </Head>
      <ContactUs />
    </Layout>
  )
}

export default Contact
