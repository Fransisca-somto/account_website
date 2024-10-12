import React from 'react'
import '../../Products/modify/modifyproduct.css'

const ModifyOpeningBalance = () => {
  const categories = ["BOTTLE WATER", "NBL", "GUINESS", "INTL BREW", "SOFT DRINKS"];
  return (
    <div id='inventory__details' className='modify'>
      <p>Opening Balance Modification</p>
      <div>
        <form action="#">
            <p>Select Branch to modify</p>
          <label htmlFor="branchname">
            <span>Branch Name:</span>
            <select name="" id="branchname">
                {categories.map(category => <option>{category}</option>)}
            </select>
          </label>
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default ModifyOpeningBalance