import React from 'react'
import Layout from '../components/Layout'
import { FaArrowRight, FaCircle, FaPlus } from "react-icons/fa";
import Section01 from '../components/Section01';
import BreadCrumb from '../components/BreadCrumb';
import ServicesCard from '../components/ServicesCard';


const Services = () => {
  return (
    <Layout>
      <Section01 />
      <BreadCrumb />
      <ServicesCard />
    </Layout>
  )
}

export default Services
