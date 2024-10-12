/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";

// ================================= FOR THE INVENTORY SECTION ============================= //
import Inventory from "./components/inventory/Inventory";

// ========= FOR THE PRODUCTS PART ========= //
import NewProduct from "./components/inventory/Products/new/NewProduct";
import ModifyProduct from "./components/inventory/Products/modify/ModifyProduct";
import ProductCosting from "./components/inventory/Products/productcosting/ProductCosting";
import ProductListing from "./components/inventory/Products/listing/ProductListing";

// ========== FOR THE CATEGORY PART ======== //
import NewCategory from "./components/inventory/Category/new/NewCategory";
import ModifyCategory from "./components/inventory/Category/modify/ModifyCategory";
import CategoryList from "./components/inventory/Category/list/CategoryList";

// ========= FOR THE OPENING BALANCE PART ========== //
import NewOpeningBalance from "./components/inventory/OpeningBalance/new/NewOpeningBalance";
import ModifyOpeningBalance from "./components/inventory/OpeningBalance/modify/ModifyOpeningBalance";
import OpeningBalanceList from "./components/inventory/OpeningBalance/list/OpeningBalanceList";

// ========== FOR THE TRANSFER PART ============= //
import NewTransfer from "./components/inventory/Transfers/new/NewTransfer";
import ModifyTransfer from "./components/inventory/Transfers/modify/ModifyTransfer";
import TransferList from "./components/inventory/Transfers/list/TransferList";

// ========== FOR THE REQUISITION PART ============= //
import NewRequisition from "./components/inventory/Requisition/new/NewRequisition";
import ModifyRequisition from "./components/inventory/Requisition/modify/ModifyRequisition";
import RequisitionListing from "./components/inventory/Requisition/list/RequisitionListing";

// ========= FOR THE ADJUSTMENT PART =========== //
import NewAdjustment from "./components/inventory/Adjustment/new/NewAdjustment";
import ModifyAdjustment from "./components/inventory/Adjustment/modify/ModifyAdjustment";
import AdjustmentList from "./components/inventory/Adjustment/list/AdjustmentList";

// ========= FOR THE ACTIVITIES ============== //
import Acivities from "./components/inventory/Activities/Acivities";

// ========= FOR THE BIN CARD PART =========== //
import BinCard from "./components/inventory/BinCard/BinCard";

// ====================== FOR THE CUSTOMERS SECTION ============================== //
import Customers from "./components/customers/Customers";

// ============ FOR THE CUSTOMER SECTION =========== //
import NewCustomer from "./components/customers/Customer/new/NewCustomer";
import ModifyCustomer from "./components/customers/Customer/modify/ModifyCustomer";
import GeneralList from "./components/customers/Customer/list/general/GeneralList";
import DealersList from "./components/customers/Customer/list/dealers/DealersList";


//  ========== FOR SALES ORDER SECTION ============== //
import NewSalesOrder from "./components/customers/SalesOrder/new/NewSalesOrder";


// ========== FOR THE STYLE ============== //
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Inventory />,
        children: [
          { 
            // ============ PRODUCT SECTION ============== //
            children: [
              {
                path: "/newproduct",
                element: <NewProduct />,
              },
              {
                path: "/modifyproduct",
                element: <ModifyProduct />,
              },
              {
                path: "/productcosting",
                element: <ProductCosting />,
              },
              {
                path: "/productlisting",
                element: <ProductListing />,
              },
            ]
          },

          {
            // =========== CATEGORY SECTION ============= //
            children: [
              {
                path: "/newcategory",
                element: <NewCategory />,
              },
              {
                path: "/modifycategory",
                element: <ModifyCategory />
              },
              {
                path: "/categorylist",
                element: <CategoryList />
              }
            ]
          },

          // =========== OPENING BALANCE SECTION ========== //
          {
            children: [
              {
                path: "/newopeningbalance",
                element: <NewOpeningBalance />
              },
              {
                path: "/modifyopeningbalance",
                element: <ModifyOpeningBalance />
              },
              {
                path: "/openingbalancelist",
                element: <OpeningBalanceList />
              }
            ]
          },

          // ========= TRANSFER SECTION ============== //
          {
            children: [
              {
                path: "/newtransfer",
                element: <NewTransfer />
              },
              {
                path: "/modifytransfer",
                element: <ModifyTransfer />
              },
              {
                path: "/transferlist",
                element: <TransferList />
              }
            ]
          },

          // ======== REQUISITION SECTION ====== //
          {
            children: [
              {
                path: "/newrequisition",
                element: <NewRequisition />
              },
              {
                path: "/modifyrequisition",
                element: <ModifyRequisition />
              },
              {
                path: "/requisitionlist",
                element: <RequisitionListing />
              }
            ]
          },

          // ======== ADUSTMENT SECTION ======= //
          {
            children: [
              {
                path: "/newadjustment",
                element: <NewAdjustment />
              },
              {
                path: "/modifyadjustment",
                element: <ModifyAdjustment />
              },
              {
                path: "/adjustmentlist",
                element: <AdjustmentList />
              }
            ]
          },

          // ========== ACTIVITIES SECTION ======== //
          {
            children: [
              {
                path: "/activities",
                element: <Acivities />
              }
            ]
          },

          // =========== BIN CARD ============= //
          {
            children: [
              {
                path: "/bincard",
                element: <BinCard />
              }
            ]
          }
        ],
      },
      {
        path: "/",
        element: <Customers />,
        children: [
          {
            children: [
              {
                path: "/newcustomer",
                element: <NewCustomer />
              },
              {
                path: "/modifycustomer",
                element: <ModifyCustomer />
              },

              {
                children:[
                  {
                    path: "/generalcustomerlist",
                    element: <GeneralList />
                  },
                  {
                    path: "/dealerslist",
                    element: <DealersList />
                  }
                ]
              }

            ],

          },

          {
            children:[
              {
                path: "/newsalesorder",
                element: <NewSalesOrder />
              }
            ]
          }
        ]
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
