import React from 'react'

const AdjustmentList = () => {
  return (
    <div id='inventory__details' className='modify'>
      <p>Adjustment List</p>
      <div>
        <p style={{fontSize: "1.5em", textAlign: "center", margin: "1.5em auto",}}>No Adjustment Record Found</p>
        {/* <form action="#">
            <p>Find Product to edit</p>
          <label htmlFor="productname">
            <span>Product Name:</span>
            <input type="text" />
          </label>
          <button type='submit'>Search</button>
        </form> */}
      </div>
    </div>
  )
}

export default AdjustmentList