/** @format */

import React from "react";

const NewCustomer = () => {
  const location = ["Select Location", "HEAD OFFICE", "WAREHOUSE"]

  return (
    <div id="customers__details" className="newproduct">
      <p>New Customer</p>
      <div>
        <form action="#">
          <label htmlFor="cusname">
            Customer Name:
            <input type="text" id="cusname" />
          </label>
          <label htmlFor="company">
            Company:
            <input type="text" id="company" />
          </label>
          <label htmlFor="address">
            Address:
            <textarea name="text" id="company"></textarea>
          </label>
          <label htmlFor="phone">
            Phone:
            <input type="text" name="" id="phone" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="text" id="email" />
          </label>
          <label htmlFor="domicile">
            Domicile:
            <select name="domicile" id="domicile">
              {location.map((locate) => (
                <option>{locate}</option>
              ))}
            </select>
          </label>

          <label htmlFor="openingdate">
            Opening Date:
            <input type="date" id="openingdate" />
          </label>
          <label htmlFor="creditlimit">
            Credit Limit:
            <input type="text" id="creditlimit" placeholder="0" />
          </label>
          <label htmlFor="openingbalance">
            Opening Balance:
            <input type="text" id="openingbalance" placeholder="0" />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default NewCustomer;
