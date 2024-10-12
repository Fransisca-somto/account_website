/** @format */

import React from "react";
import "./activities.css";

const Acivities = () => {
  return (
    <div id="inventory__details" className="activities">
      <p>Product Activities</p>
      <div>
        <p>
          <a href="#">Reset</a>|<a href="#">Print</a>
        </p>
        <form action="#">
          <label htmlFor="starting">
            <span>Starting:</span>
            <input type="date" id="starting" />
          </label>

          <label htmlFor="ending">
            <span>Ending:</span>
            <input type="date" id="ending" />
          </label>

          <label htmlFor="branch">
            <span>Branch:</span>
            <input type="text" placeholder="All" id="branch" />
          </label>

          <label htmlFor="product">
            <span>Product:</span>
            <input type="text" placeholder="All" id="product" />
          </label>

          <label htmlFor="button">
            <button>Search</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Acivities;
