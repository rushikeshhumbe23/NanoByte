import React from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

function Interview() {
  
  return (
    <div className='flex relative' style={{ height: '91vh' }}>
      <Sidebar />
      <Main />
    </div>
  )
}

export default Interview