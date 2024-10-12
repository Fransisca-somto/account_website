import React from 'react'
import "../../Products/modify/modifyproduct.css"

const ModifyTransfer = () => {
  return (
    <div id='inventory__details' className='modify'>
      <p>Transfer Modification</p>
      <div>
        <form action="#">
            <p>Find Transfer to edit</p>
          <label htmlFor="productname">
            <span>Transfer Name:</span>
            <input type="text" />
          </label>
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default ModifyTransfer