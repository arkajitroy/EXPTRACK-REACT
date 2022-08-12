import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import RemainingBudget from "./components/Remaining";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3 header-tag">💰 EXPTracker</h1>
        <h7 className="subname">Expense Tracker made using REACT.JS</h7>
        <div className="row mt-4">
          <div className="col-sm tracker">
            <Budget />
          </div>
          <div className="col-sm tracker">
            <RemainingBudget />
          </div>
          <div className="col-sm tracker">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
