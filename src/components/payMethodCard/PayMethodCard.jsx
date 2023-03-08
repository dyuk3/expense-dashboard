import './payMethodCard.css';

const PayMethodCard = (props) => {
  return (
    <div className='dashboard__payMethodCard'>
      <div className="dashboard__payMethodCard-info">
        <p>{props.name}</p>
        <span className='cent'>1-5%</span>
      </div>
      <div className="dashboard__payMethodCard-logo">
        <img src={props.img} alt="" />
      </div>
    </div>
  );
};

export default PayMethodCard;