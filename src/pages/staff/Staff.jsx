import React from 'react'

import Head from '../../components/Head'
import Navbar from '../../components/Navbar'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'

import './staff.css'
import Card from '../../components/card/Card'

const Staff = () => {
  return (
    <>
     <Head />
     <Navbar />
     <BreadCrumb />
     <Card />
    </>
  )
}

export default Staff