import React from 'react'
import './newcategory.css'

const NewCategory = () => {
  return (
    <div id='inventory__details' className='newcategory'>
      <p>New Product Category</p>

      <div className='nice'>
        <form action="#">
            <label htmlFor="name">
                <span>Name:</span>
                <input type="text" id="name" />
            </label>
            <label htmlFor="description">
                <span>Description:</span>
                <input type="text" id="description" />
            </label>
            <button>Create</button>
        </form>
      </div>
    </div>
  )
}

export default NewCategory