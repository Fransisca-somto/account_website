import React from 'react'

const GeneralList = () => {

    const customers =[
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
        {
            address: "address",
            phone: 80 ,
            invoice: 1122321,
            invoicevalue: 450234.00,
            paymentoninvoice: 100000.00,
            otherpayments: 450234.00 - 100000.00,
            balance: 0,
        },
    ]

  return (
    <div id='inventory__details' className='productcosting'>
      <p>Product Cost Price</p>
      <div>
        <p>Products on Record = {customers.length}&emsp;&emsp;&emsp;<a href="#">print</a></p>

        <table>
            <tr className='product__heading'>
                <td>Customer</td>
                <td>Address</td>
                <td>Phone</td>
                <td>Invoice</td>
                <td>Invoice Value</td>
                <td>Payment on Invoice</td>
                <td>Other Payments</td>
                <td>Balance</td>
            </tr>
            {customers.map(customer => {
                return (
                    <tr>
                        <td>General</td>
                        <td>{customer.address}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.invoice}</td>
                        <td>{customer.invoicevalue}</td>
                        <td>{customer.paymentoninvoice}</td>
                        <td>{customer.otherpayments}</td>
                        <td>{customer.balance}</td>
                    </tr>
                )
            })}
        </table>
      </div>
    </div>
  )
}

export default GeneralList