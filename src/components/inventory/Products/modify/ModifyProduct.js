import React from 'react'
import './modifyproduct.css'

const ModifyProduct = () => {
  return (
    <div id='inventory__details' className='modify'>
      <p>Product Modification</p>
      <div>
        <form action="#">
            <p>Find Product to edit</p>
          <label htmlFor="productname">
            <span>Product Name:</span>
            <input type="text" />
          </label>
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default ModifyProduct