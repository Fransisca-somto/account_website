/** @format */

import React from "react";
import Honesty from "../../Assets/Honesty.jpg";
import TMlogo from "../../Assets/TMlogoSmall4.jpg";
import { Link } from "react-router-dom";
import './nav.css'
import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <p className="nav__info">
        <span>
          You Are Logged As Jerome @HEAD OFFICE[Administrator]|
          <a href="#">Profile</a>|<a href="#">Log Out</a>
        </span>
        <span>Business Year From Febuary, 2024</span>
      </p>

      <div className="nav__img">
        <img src={Honesty} className="honesty"/>
        powered by
        <img src={TMlogo} className="logo" />
      </div>

      <hr />

      <nav>
        <ul className="nav__navigate">
          <li className="lvl"><Link to ="/home" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100px"}}>
          Home
          </Link>
          </li>
          
          <span>|</span>

          <li className="lvl"><Link to="#">Inventory<span>⮟</span></Link>
            <ul className="lvls">
              <li className="first"><Link to="#">Product<span>⮞</span></Link>
                <ul className="firsts">
                  <li><Link to="/newproduct">New</Link></li>
                  <li><Link to="/modifyproduct">Modify</Link></li>
                  <li><Link to="/productcosting">Costing</Link></li>
                  <li><Link to="/productlisting">List</Link></li>
                </ul>
              </li>
              <li className="first"><Link to="#">Category<span>⮞</span></Link>
                <ul className="firsts">
                  <li><Link to="/newcategory">New</Link></li>
                  <li><Link to="/modifycategory">Modify</Link></li>
                  <li><Link to="/categorylist">List</Link></li>
                </ul>
              </li>
              <li className="first"><Link to="#">Opening Balance<span>⮞</span></Link>
                <ul className="firsts">
                  <li><Link to="/newopeningbalance">New</Link></li>
                  <li><Link to="/modifyopeningbalance">Modify</Link></li>
                  <li><Link to="/openingbalancelist">List</Link></li>
                </ul>
              </li>
              <li className="first"><Link to="#">Transfers<span>⮞</span></Link>
                <ul className="firsts">
                  <li><Link to="/newtransfer">New</Link></li>
                  <li><Link to="/modifytransfer">Modify</Link></li>
                  <li><Link to="/transferlist">List</Link></li>
                </ul>
              </li>
              <li className="first"><Link to="#">Requisition<span>⮞</span></Link>
                <ul className="firsts">
                  <li><Link to="/newrequisition">New</Link></li>
                  <li><Link to="/modifyrequisition">Modify</Link></li>
                  <li><Link to="/requisitionlist">List</Link></li>
                </ul>
              </li>
              <li className="first"><Link to="#">Adjustment<span>⮞</span></Link>
                <ul className="firsts">
                  <li><Link to="/newadjustment">New</Link></li>
                  <li><Link to="/modifyadjustment">Modify</Link></li>
                  <li><Link to="/adjustmentlist">List</Link></li>
                </ul>
              </li>
              <li className="first"><Link to="/activities">Activities</Link></li>
              <li className="first"><Link to="/bincard">Bin Card</Link></li>
            </ul>
          </li>

          <span>|</span>

          <li className="lvl"><Link to="#">Customers<span>⮟</span></Link>
            <ul className="lvls">
              <li className="first"><Link to="#">Customers<span>⮞</span></Link>
                <ul className="firsts">
                  <li><Link to="/newcustomer">New</Link></li>
                  <li><Link to="/modifycustomer">Modify</Link></li>
                  <li><Link to="/">List<span>⮞</span></Link>
                    <ul className="last">
                      <li><Link to="/generalcustomerlist">General</Link></li>
                      <li><Link to="/dealerslist">Dealer</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="first"><Link>Sales Order<span>⮞</span></Link>
                <ul className="firsts">
                  <li><Link to="/newsalesorder">New</Link></li>
                  <li><Link to="/salesorderdealer">Dealer</Link></li>
                  <li><Link to="/modifysalesorder">Modify</Link></li>
                </ul>
              </li>
              <li className="first"><a href="#">Invoice<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Dealer</a></li>
                  <li><a href="#">Call Back</a></li>
                  <li><a href="#">Modify</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Receipt<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Dealers</a></li>
                  <li><a href="#">General</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Credit Note<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Rebate<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">Search...</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Refund<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">Search...</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Reimburse<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <span>|</span>

          <li className="lvl"><a href="#">Vendors<span>⮟</span></a>
            <ul className="lvls">
              <li className="first"><a href="#">Customer<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">List</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Purchases<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Suppliers Payment<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">List</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Suppliers Refund<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Debit Note<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">List</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Expenses<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Account</a></li>
                  <li><a href="#">Expenses</a></li>
                  <li><a href="#">Refunds</a></li>
                  <li><a href="#">Activities</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <span>|</span>

          <li className="lvl"><a href="#">Accounts<span>⮟</span></a>
            <ul className="lvls">
              <li className="first"><a href="#">Bank<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">Ledger</a></li>
                  <li><a href="#">Cash Flow...</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">F-Transfer<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">Search...</a></li>
                </ul>
              </li>
            </ul>
          </li>
          
          <span>|</span>

          <li className="lvl"><a href="#" style={{textWrap: "nowrap",}}>Assets Mgmt<span>⮟</span></a>
            <ul className="lvls">
              <li className="first"><a href="#">Account<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">List</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Income<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">List</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Loan<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">List</a></li>
                  <li><a href="#">Payment</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Investments<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New Investments</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Fixed Assets<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Account</a></li>
                  <li><a href="#">Purchases</a></li>
                  <li><a href="#">Payment</a></li>
                  <li><a href="#">Depreciation</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <span>|</span>

          <li className="lvl"><a href="#">Company<span>⮟</span></a>
            <ul className="lvls">
              <li className="first"><a href="#">Profile<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Modify</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Mgmt<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Financial Year</a></li>
                  <li><a href="#">FX Converter</a></li>
                  <li><a href="#">Invoice Options</a></li>
                  <li><a href="#">Shut Server</a></li>
                  <li><a href="#">Closing Date</a></li>
                  <li><a href="#">Log Info</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Branches<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Modify</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Employees<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">Salaries</a></li>
                  <li><a href="#">Allowances</a></li>
                  <li><a href="#">Loans</a></li>
                  <li><a href="#">Activities</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Adjustment<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">New</a></li>
                  <li><a href="#">Modify</a></li>
                  <li><a href="#">List</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Users<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Change Password</a></li>
                  <li><a href="#">Edit User</a></li>
                  <li><a href="#">Password Reset</a></li>
                  <li><a href="#">List</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <span>|</span>

          <li className="lvl"><a href="#">Report<span>⮟</span></a>
            <ul className="lvls">
              <li className="first"><a href="#">Financials<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Profit & Loss</a></li>
                  <li><a href="#">Cash Summary</a></li>
                  <li><a href="#">Expenditure</a></li>
                  <li><a href="#">Balance Sheet</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Customer<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Sales Invoice</a></li>
                  <li><a href="#">Waybill</a></li>
                  <li><a href="#">Receipts</a></li>
                  <li><a href="#">Proforma Invoice</a></li>
                  <li><a href="#">Credit Note</a></li>
                  <li><a href="#">Ledger</a></li>
                  <li><a href="#">Creditors</a></li>
                  <li><a href="#">Debtors</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Vendor<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Invoice</a></li>
                  <li><a href="#">Ledger</a></li>
                  <li><a href="#">DebtNote</a></li>
                  <li><a href="#">Invoice Valuation</a></li>
                  <li><a href="#">Purchases</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Stock<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Current</a></li>
                  <li><a href="#">Previous</a></li>
                  <li><a href="#">Pre-Order List</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Sales<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Search</a></li>
                  <li><a href="#">Analysis</a></li>
                  <li><a href="#">Valuation</a></li>
                </ul>
              </li>
              <li className="first"><a href="#">Rebate<span>⮞</span></a>
                <ul className="firsts">
                  <li><a href="#">Product</a></li>
                  <li><a href="#">Search...</a></li>
                </ul>
              </li>
            </ul> 
          </li>
        </ul>
      </nav>
 
      <div id="details">
        <Outlet />
      </div>
    </div>
  );
};

export default Nav;
