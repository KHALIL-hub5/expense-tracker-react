import React from "react";

export const IncomeExpenses: React.FC = () => {
    return (
        <div className="inc-exp-container" style={{ backgroundColor: "lightblue" }}>
        <div>
          <h4>Income</h4>                         
  <p className="money plus">$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">$0.00</p>
        </div>
      </div>
    );
};
