import React from "react";

export const TransactionList: React.FC = () => {
    return (
        <div className="mb-4">
            <h3>History</h3>
            <ul className="list">
                <li className="minus">
                    Cash
                    <span className="text-danger">-$400</span><button
                    className="delete-btn"
                    >x</button>
                </li>
            </ul>
        </div>
    );
};
