/** @format */

import React from "react";
import "./transferlist.css";

const TransferList = () => {
  return (
    <div id="inventory__details" className="transferlist">
      <p>Transfer Activities</p>
      <div>
        <form action="#">
          <label htmlFor="starting">
            <span>Starting:</span>
            <input type="date" id="starting"/>
          </label>

          <label htmlFor="ending">
            <span>Ending:</span>
            <input type="date" id="ending" />
          </label>

          <label htmlFor="product">
            <span>Product:</span>
            <input type="text" placeholder="All" id="product" />
          </label>

          <label htmlFor="source">
            <span>Source:</span>
            <input type="text" placeholder="All" id="source" />
          </label>

          <label htmlFor="destination">
            <span>Destination:</span>
            <input type="text" placeholder="All" id="destination" />
          </label>

          <label htmlFor="button"><button>Search</button></label>
          
        </form>
      </div>
    </div>
  );
};

export default TransferList;
