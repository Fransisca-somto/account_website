/** @format */

import React from "react";
import "./modifycategory.css"

const ModifyCategory = () => {
  const authorization = ["Amaka", "Rose"];
  const categories = ["BOTTLE WATER", "NBL", "GUINESS", "INTL BREW", "SOFT DRINKS"];
  return (
    <div id="inventory__details" className="modifycategory">
      <p>Product Category Modification</p>
      <div>
        <form action="#">
          <label htmlFor="category">
            <span>Category Name:</span>
            <select name="category" id="category">
              {categories.map(category => <option>{category}</option>)}
            </select>
          </label>
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default ModifyCategory;
