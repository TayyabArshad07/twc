import React from 'react'
import Layout from '../components/Layout'
import TeamCard from '../components/TeamCard'

const OurTeam = () => {
  return (
    <Layout>
      <h1 className='font-bold text-[60px] text-green-500'>Our Team</h1>
        <TeamCard />
    </Layout>
  )
}

export default OurTeam
