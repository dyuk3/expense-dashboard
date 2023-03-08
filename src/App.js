import './App.css';
import PayMethods from './components/payMethods/PayMethods';
import Sidebar from './components/sidebar/Sidebar';
import Statistics from './components/statistics/Statistics';
import Transactions from './components/transactions/Transactions';

function App() {
  return (
    <div className='App'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <Statistics />
        <PayMethods />
        <Transactions />
      </div>
    </div>
  );
}

export default App;
