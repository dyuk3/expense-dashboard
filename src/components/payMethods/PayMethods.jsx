import PayMethodCard from '../payMethodCard/PayMethodCard';
import './payMethods.css';

const brands = [
  {
    name: 'PayPal',
    img: 'https://freepngimg.com/save/13625-paypal-logo-transparent-png/1817x1266',
  },
  {
    name: 'Mastercard',
    img: 'https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png',

  },
  {
    name: 'Webmoney',
    img: 'https://banner2.cleanpng.com/20180410/lfe/kisspng-webmoney-e-commerce-payment-system-digital-currenc-wallet-5accb69c229b82.3714174215233655321418.jpg',
  },
  {
    name: 'Qiwi',
    img: 'https://w7.pngwing.com/pngs/451/264/png-transparent-qiwi-%D0%BA%D0%BE%D1%88%D0%B5%D0%BB%D0%B5%D0%BA-payment-system-ps-yandex-money-llc-others-text-service-orange.png',

  },
  {
    name: 'Transferwise',
    img: 'https://pechnet.com/wp-content/uploads/2015/01/Flag-transparent-background-e1410908731581.png',

  },
];

const PayMethods = () => {
  return (
    <div className='dashboard__payMethods'>
      <h2>Payment Methods</h2>

      <div className='dashboard__payMethods-container' >
        {brands.map((brand, index) => (
          <PayMethodCard key={index
          } {...brand} />
        ))}
      </div>
    </div>
  );
};

export default PayMethods;