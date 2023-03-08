import './sidebar.css';

const manageItems = [
  {
    name: 'Proxy',
  },
  {
    name: 'Balance',
  },
  {
    name: 'Online Check',
  },
  {
    name: 'Affiliate system',
  },
];

const suppItems = [
  {
    name: 'Tickets',
  },
  {
    name: 'FAQ',
  },
];


const Sidebar = () => {
  return (
    <div className='dashboard__sidebar'>
      <div className="dashboard__sidebar-container">
        <div className="dashboard__sidebar-header">
          <h2 className='dashboard-logo'>Airnow</h2>
        </div>
        <div className='hr'></div>

        <span className='category-head'>Manage</span>

        <ul className='manage-items' >
          {manageItems.map((item, index) => (
            <a href='/' key={index}>{item.name}</a>
          ))}
        </ul>

        <span className="category-head">Support</span>

        <ul className='manage-items' >
          {suppItems.map((item, index) => (
            <a href='/' key={index}>{item.name}</a>
          ))}
        </ul>


      </div>
      <div className='supp-banner'>
        <p>Help Center</p>
        <span style={{ fontSize: '12px', color: 'lightGray' }}>Visit our help center</span>
        <button className='start-btn'>Start</button>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;