/** @format */

import React from "react";

const NewAdjustment = () => {
  const authorization = ["SELECT AUTHOR", "Amaka", "Rose"];
  const branch = ["Select Location", "HEAD OFFICE", "WAREHOUSE"];
  return (
    <div id="inventory__details" className="newopeningbalance">
      <p>Inventory Adjustment</p>
      <div>
        <div className="openingbalance__intro">
          <form action="#">
            <div>
              <label htmlFor="refno">
                <span>Ref No.:</span>
                <input type="number" id="refno" />
              </label>
              <label htmlFor="author">
                <span>Authorised:</span>
                <select name="" id="author">
                  {authorization.map(author => <option>{author}</option>)}
                </select>
              </label>
              <label htmlFor="authorised">
                <span>Comment:</span>
                <textarea name="" id=""></textarea>
              </label>
            </div>

            <div>
              <label htmlFor="date">
                <span>Date:</span>
                <input type="date" id="date" />
              </label>

              <label htmlFor="branch">
                <span>Destination:</span>
                <select name="branch" id="branch">
                  {branch.map((bran) => (
                    <option>{bran}</option>
                  ))}
                </select>
              </label>
            </div>
          </form>
        </div>

        <div className="openingbalance__items">
          <div>
            <form action="#">
              <label htmlFor="name">
                <span>Item Name</span>
                <input type="text" placeholder="Product Id" />
              </label>
              <label htmlFor="description">
                <span>Description</span>
                <input type="text" disabled />
              </label>
              <label htmlFor="unitcost">
                <span>Cur. Qty</span>
                <input type="text" />
              </label>
              <label htmlFor="amount">
                <span>New Qty</span>
                <input type="text" disabled />
              </label>
              <label htmlFor="quantity">
                <span>Diff.</span>
                <input type="text" />
              </label>
              <button>Add</button>
            </form>
          </div>
          <div className="under__items">
            <label htmlFor="total">
              <span>Total Value:</span>
              <input type="text" value={0.0} disabled />
            </label>
          </div>
        </div>
        <div className="opening__base">
          <a href="#" style={{ color: "white" }}>
            Reset
          </a>
          |
          <a href="#" style={{ color: "skyblue" }}>
            Post
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewAdjustment;
