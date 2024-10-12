import React from 'react'
import { Outlet } from 'react-router-dom'

const Inventory = () => {
  return (
    <div id='inventory__details'><Outlet /></div>
  )
}

export default Inventory