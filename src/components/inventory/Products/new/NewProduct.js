import React from 'react';
import './newproduct.css';

const NewProduct = () => {
  const category =["BOTTLE WATER", "GUINESS", "INTL BREW", "NBL","SOFT DRINKS"];
  const type = ["Inventory", "Non-inventory"];
  const kind = ["Pcs", "Case", "Packs"];

  return (
    <div id='inventory__details' className='newproduct'>
      <p>New Product</p>
      <div>
        <form action="#">
          <label htmlFor="barcode">Bar Code:
            <input type="text" id='barcode' />
          </label>
          <label htmlFor="productname">Product Name:
            <input type="text" id='productname' />
          </label>
          <label htmlFor="category">Category:
            <select name="category" id="caregory">
              {category.map(categ => <option>{categ}</option>)}
            </select>
          </label>
          <label htmlFor="type">Type:
            <select name="type" id="type">
              {type.map(typ => <option>{typ}</option>)}
            </select>
          </label>
          <label htmlFor="description">Description:
            <input type="text" id='description' />
          </label>
          <label htmlFor="basicuom">Basic UoM:
            <select name="basicuom" id="basicuom">
              {kind.map(kinds => <option>{kinds}</option> )}
            </select>
          </label>
          <label htmlFor="salesuom">Sales UoM:
            <select name="salesuom" id="salesuom">
              {kind.map(kinds => <option>{kinds}</option> )}
            </select>
          </label>
          <label htmlFor="purchaseuom">Purchase UoM:
            <select name="purchaseuom" id="purchaseuom">
              {kind.map(kinds => <option>{kinds}</option> )}
            </select>
          </label>
          <label htmlFor="costprice">Cost Price:
            <input type="text" id='costprice' placeholder='0' />
          </label>
          <label htmlFor="salesprice">Sales Price:
            <input type="text" id='salesprice' placeholder='0' />
          </label>
          <label htmlFor="dealerprice">Dealer Price:
            <input type="text" id='dealerprice' placeholder='0' />
          </label>
          <label htmlFor="reorderlevel">Re-order Level:
            <input type="text" id='reorderlevel' placeholder='0' />
          </label>
          <button type='submit'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default NewProduct