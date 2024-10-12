import React from 'react'

const ModifyCustomer = () => {
  return (
    <div id='inventory__details' className='modify'>
      <p>Customer Modification</p>
      <div>
        <form action="#">
            <p>Find Customer to edit</p>
          <label htmlFor="customername">
            <span>Customer Name:</span>
            <input type="text" id='customer'/>
          </label>
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default ModifyCustomer