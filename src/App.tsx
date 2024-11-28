import { Header } from '../Components/Header';
import '../Components/App.css'
import { Balance } from '../Components/Balance';
import { IncomeExpenses } from '../Components/IncomeExpenses';
import { TransactionList } from '../Components/TransactionList';
import { AddTransaction } from '../Components/AddTransaction';
import {GlobalProvider} from '../Context/GlobalState';
function App() {
    return (
        <div className="App container mt-5">
            <div className="row justify-content-center">
            <GlobalProvider>
            <Header />
                <div className="col-md-6">
                    
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </GlobalProvider>
               
            </div>
        </div>
    );
}

export default App;
