import './transactions.css';
import { CgArrowBottomLeftR, CgArrowTopRightR } from 'react-icons/cg';


const tableData = [
  {
    id: 1,
    date: '17 Feb 2020, 16:30',
    method: 'Mastercard',
    status: 'pending',
    amount: -400.00,
  },
  {
    id: 1,
    date: '14 Feb 2020, 12:39',
    method: 'PayPal',
    status: 'pending',
    amount: -250.00,
  },
  {
    id: 1,
    date: '12 Feb 2020, 09:45',
    method: 'Qiwi',
    status: 'Done',
    amount: +1000.00,
  },
  {
    id: 1,
    date: '10 Feb 2020, 12:36',
    method: 'Webmoney',
    status: 'pending',
    amount: -250.00,
  },
];

const Transactions = () => {


  const tableRows = tableData.map((item, index) => (
    <tr>
      <td>{item.date}</td>
      <td>{item.method}</td>
      <td>{item.status}</td>
      <td>{item.amount}$</td>
    </tr>
  ));

  return (
    <div className='dashboard__transactions'>
      <div className="transactions">
        <div className="transactions-header">
          <div className="transactions-left">
            <h2>Transactions</h2>
          </div>
          <div className="transactions-right">
            <span className='non-active'>Today</span>
            <span className='non-active'>This week</span>
            <span>This month</span>
          </div>
        </div>
        <div className="transaction-info">
          <table>
            <thead>
              <tr>
                <th>Date and time</th>
                <th>Payment method</th>
                <th>Status</th>
                <th>Amount($)</th>
              </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      </div>
      <div className="expenses">
        <h2 style={{ marginBottom: '3rem' }}>Income/Expense</h2>

        <div className="incomeExpense-container">
          <div className="expense-icon icon">
            <CgArrowTopRightR size={30} />
          </div>

          <div className="info">
            <span className='amount'> $22,578.00</span>
            <span>Total amount expense</span>
          </div>
        </div>

        <div className="incomeExpense-container">
          <div className="income-icon icon">
            <CgArrowBottomLeftR size={30} />
          </div>

          <div className="info">
            <span className='amount'>$5,783.00</span>
            <span>Total amount income</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;