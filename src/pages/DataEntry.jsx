import React from 'react'
import DataEntryBody from '../components/dataEntry/DataEntryBody'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

const DataEntry = () => {
  return (
    <div>
      <Navbar></Navbar>
      <DataEntryBody></DataEntryBody>
      <Footer></Footer>
    </div>
  )
}

export default DataEntry
