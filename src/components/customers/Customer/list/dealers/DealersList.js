/** @format */

import React from "react";

const DealersList = () => {
  const customers = [
    {
      customer: "Madam Ruth",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
    {
      customer: "Mama Ufoma",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
    {
      customer: "Divine Vision",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
    {
      customer: "Mama Ejima",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
    {
      customer: "Iyawo",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
    {
      customer: "Mama Arinze",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
    {
      customer: "Mama Ebuka",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
    {
      customer: "Buggis",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
    {
      customer: "Mascus",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
    {
      customer: "Witness",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
    {
      customer: "Ikpo",
      address: "address",
      phone: 80,
      invoice: 1122321,
      invoicevalue: 450234.0,
      paymentoninvoice: 100000.0,
      otherpayments: 450234.0 - 100000.0,
      balance: 0,
    },
  ];

  return (
    <div id="inventory__details" className="productcosting">
      <p>Product Cost Price</p>
      <div>
        <p>
          Products on Record = {customers.length}&emsp;&emsp;&emsp;
          <a href="#">print</a>
        </p>

        <table>
          <tr className="product__heading">
            <td>Customer</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Invoice</td>
            <td>Invoice Value</td>
            <td>Payment on Invoice</td>
            <td>Other Payments</td>
            <td>Balance</td>
          </tr>
          {customers.map((customer) => {
            return (
              <tr>
                <td>{customer.customer}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
                <td>{customer.invoice}</td>
                <td>{customer.invoicevalue}</td>
                <td>{customer.paymentoninvoice}</td>
                <td>{customer.otherpayments}</td>
                <td>{customer.balance}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default DealersList;
