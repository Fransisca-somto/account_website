import React from 'react'
import { Outlet } from 'react-router-dom'


const Customers = () => {
  return (
    <div id='customers__details'>
        <Outlet />
    </div>
  )
}

export default Customers