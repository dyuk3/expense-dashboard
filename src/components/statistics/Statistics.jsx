import { Bar, BarChart, Cell, Label, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './statistics.css';
import { BsBell } from 'react-icons/bs';

const statistics_data = [
  {
    date: '1 Mar',
    spent: 30,
    referral: 20,
  },
  {
    date: '2 Mar',
    spent: 40,
    referral: 10,
  },
  {
    date: '3 Mar',
    spent: 20,
    referral: 46,
  },
  {
    date: '4 Mar',
    spent: 12,
    referral: 27,
  },
  {
    date: '5 Mar',
    spent: 50,
    referral: 10,
  },
  {
    date: '6 Mar',
    spent: 30,
    referral: 19,
  },
  {
    date: '7 Mar',
    spent: 30,
    referral: 5,
  },
  {
    date: '8 Mar',
    spent: 30,
    referral: 20,
  },
  {
    date: '9 Mar',
    spent: 35,
    referral: 5,
  },
  {
    date: '10 Mar',
    spent: 10,
    referral: 18,
  },
  {
    date: '11 Mar',
    spent: 30,
    referral: 20,
  },
  {
    date: '12 Mar',
    spent: 30,
    referral: 20,
  },
  {
    date: '13 Mar',
    spent: 16,
    referral: 12,
  },
  {
    date: '14 Mar',
    spent: 54,
    referral: 12,
  },
];

const totalSpent = [
  {

    data: [

      {
        name: 'spent',
        value: 1200,
        fill: '#5D3FD3',
      },
      {
        name: 'referral',
        value: 672,
        fill: '#7EC8E3',

      },
    ]
  }
];

const COLORS = ['#0088FE', '#00C49F'];

const Statistics = () => {
  return (
    <div className='dashboard__statistics'>
      <div className="dashboard__balance">
        <div className="dashboard__balance-header">
          <div className='statistics-header-left'>
            <h1 >Balance</h1>
          </div>
          <div className='statistics-header-right'>
            <BsBell size={24} />
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="user" />
          </div>
        </div>

        <h2>Daily balance overview</h2>
        <BarChart width={700} height={260} data={statistics_data}>
          {/* <CartesianGrid strokeDasharray='3 3' /> */}
          <XAxis type='category' dataKey='date' ticks={[1, 14]} />
          <YAxis domain={[0, 100]} ticks={[0, 50, 100]} />

          <Tooltip />
          <Legend verticalAlign='top' align='right ' />
          {/* <Legend /> */}
          <Bar barSize={10} dataKey='spent' stackId='d' fill='#5D3FD3' radius={[0, 0, 10, 10]} />
          <Bar dataKey='referral' stackId='d' fill='#7EC8E3' radius={[10, 10, 0, 0]} />
        </BarChart>
      </div>
      <div className="balance-statistics">
        <h2>Balance Statistic</h2>

        <p>Money spent: $1872</p>
        <PieChart width={500} height={260}   >

          {totalSpent.map((item, index) => (
            <Pie data={item.data} cx='20%' cy='40%' paddingAngle={2} innerRadius={60} outerRadius={80} fill='item.fill' dataKey='value' />

          ))}
          <Label width={50} content='asdas' position='center' >same shit</Label>
          <Legend align='left' />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;