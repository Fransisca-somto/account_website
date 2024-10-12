/** @format */

import React from "react";
import './categorylist.css'

const CategoryList = () => {
  const categories = [
    {
      name: "BOTTLED WATER",
      description: "WATER CWAY"
    },
    {
      name: "GUINESS",
      description: "GUINESS"
    },
    {
      name: "INTL BREW",
      description: "INTL BREW"
    },
    {
      name: "NBL",
      description: "NBL"
    },
    {
      name: "SOFT DRINKS",
      description: "SOFT DRINKS"
    }
  ];
  return (
    <div id="inventory__details" className="categorylist">
      <p>Product Category List</p>
      <div>
        <div>
          <p><span>Categories on Record = {categories.length}</span>&emsp;&emsp;&emsp;<a href="#">Print</a></p>
          <table>
            <tr>
              <td>Name</td>
              <td>Description</td>
            </tr>
            {
              categories.map(category => {
                return (
                  <tr>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
