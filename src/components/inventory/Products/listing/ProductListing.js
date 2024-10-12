import React from 'react'

const ProductListing = () => {
    const products = [
        {
            index: 1,
            name: "BETA MALT",
            category: "INTL BREW",
            description: "BETAMALT BOTTLE",
            initial: 5000.00,
            current: 6000.00
        },
        {
            index: 2,
            name: "HERO",
            category: "INTL BREW",
            description: "HERO BOTTLE",
            initial: 4000.00,
            current: 5500.00
        },
        {
            index: 3,
            name: "TROPHY",
            category: "INTL BREW",
            description: "TROPHY BOTTLE",
            initial: 4000.00,
            current: 5500.00
        },
        {
            index: 4,
            name: "TROPHY STOUT",
            category: "INTL BREW",
            description: "TROPHY STOUT BOTTLE",
            initial: 5500.00,
            current: 7000.00
        },
        {
            index: 5,
            name: "EAGLE LAGER",
            category: "INTL BREW",
            description: "EAGLE LAGER BOTTLE",
            initial: 3000.00,
            current: 4000.00
        },
        {
            index: 6,
            name: "GRAND MALT",
            category: "INTL BREW",
            description: "GRANDMALT BOTTLE",
            initial: 5500.00,
            current: 6500.00
        },
        {
            index: 7,
            name: "EAGLE STOUT",
            category: "INTL BREW",
            description: "EAGLE STOUT BOTTLE",
            initial: 5000.00,
            current: 6000.00
        },
        {
            index: 8,
            name: "ICE",
            category: "NBL",
            description: "ICE BOTTLE",
            initial: 8000.00,
            current: 11000.00
        },
        {
            index: 9,
            name: "STAR",
            category: "NBL",
            description: "STAR BOTTLE",
            initial: 3500.00,
            current: 5000.00
        },
        {
            index: 10,
            name: "GOLDBERG",
            category: "NBL",
            description: "GOLDBERG BOTTLE",
            initial: 4000.00,
            current: 5500.00
        },
        {
            index: 11,
            name: "S/STOUT",
            category: "GUINESS",
            description: "SMALL STOUT BOTTLE",
            initial: 8000.00,
            current: 10000.00
        },
    ]
  return (
    <div id='inventory__details' className='productcosting'>
      <p>Product Cost Price</p>
      <div>
        <p>Products on Record = {products.length}&emsp;&emsp;&emsp;<a href="#">print</a></p>

        <table>
            <tr className='product__heading'>
                <td>S/N</td>
                <td>Products</td>
                <td>Category</td>
                <td>Description</td>
                <td>Initial</td>
                <td>Current</td>
            </tr>
            {products.map(product => {
                return (
                    <tr>
                        <td>{product.index}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.description}</td>
                        <td>{product.initial}</td>
                        <td>{product.current}</td>
                    </tr>
                )
            })}
        </table>
      </div>
    </div>
  )
}

export default ProductListing