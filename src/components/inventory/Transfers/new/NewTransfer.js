/** @format */

import React from "react";
import "../../OpeningBalance/new/newopeningbalance.css";

const NewTransfer = () => {
  const authorization = ["SELECT AUTHOR", "Amaka", "Rose"];
  const branch = ["Select Location", "HEAD OFFICE", "WAREHOUSE"];
  return (
    <div id="inventory__details" className="newopeningbalance">
      <p>New Product Transfer</p>
      <div>
        <div className="openingbalance__intro">
          <form action="#">
            <div>
              <label htmlFor="refno">
                <span>Transfer No.:</span>
                <input type="number" id="refno" />
              </label>
              <label htmlFor="refno">
                <span>Account:</span>
                <input type="number" id="refno" />
              </label>
              <label htmlFor="authorised">
                <span>Authorised:</span>
                <select name="" id="authorised">
                  {authorization.map((author) => (
                    <option>{author}</option>
                  ))}
                </select>
              </label>
            </div>

            <div>
              <label htmlFor="date">
                <span>Date:</span>
                <input type="date" id="date" />
              </label>

              <label htmlFor="branch">
                <span>Source:</span>
                <select name="branch" id="branch">
                  {branch.map((bran) => (
                    <option>{bran}</option>
                  ))}
                </select>
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
              <label htmlFor="quantity">
                <span>Quantity</span>
                <input type="text" placeholder="1" />
              </label>
              <label htmlFor="unitcost">
                <span>Unit Cost</span>
                <input type="text" />
              </label>
              <label htmlFor="amount">
                <span>Amount</span>
                <input type="text" disabled />
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

export default NewTransfer;
