import React from 'react'
import "../../Products/modify/modifyproduct.css"

const OpeningBalanceList = () => {
    const branch = ["SELECT BRANCH", "HEAD OFFICE", "WAREHOUSE"];
  return (
    <div id='inventory__details' className='modify'>
      <p>Opening Balance Listing</p>
      <div>
        <form action="#">
            <p>Select a Branch</p>
          <label htmlFor="branchname">
            <span>Branch Name:</span>
            <select id="branchname">
                {branch.map(bran => <option>{bran}</option>)}
            </select>
          </label>
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default OpeningBalanceList