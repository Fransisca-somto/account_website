import React from 'react'

const ModifyRequisition = () => {
  return (
    <div id='inventory__details' className='modify'>
      <p>Requisition Modification</p>
      <div>
        <form action="#">
            <p>Find requisition to edit</p>
          <label htmlFor="productname">
            <span>Requisition No.:</span>
            <input type="text" />
          </label>
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default ModifyRequisition