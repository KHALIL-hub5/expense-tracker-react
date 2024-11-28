import React, { useState } from "react";

export const AddTransaction: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [amount, setAmount] = useState<number | string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ text, amount });
        setText('');
        setAmount('');
    };

    return (
        <div className="card p-3">
            <h3>Add New Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">
                        Text
                    </label>
                    <input
                        type="text"
                        id="text"
                        className="form-control"
                        placeholder="Enter text..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                        Amount (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        className="form-control"
                        placeholder="Enter amount..."
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Add Transaction
                </button>
            </form>
        </div>
    );
};
