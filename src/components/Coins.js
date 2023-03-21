// // import React from 'react';
// // import PropTypes from 'prop-types';

// // export default function Coin({
// //   name, volume, price,
// // }) {
// //   return (
// //     <>
// //       <div className="coinContainer">
// //         <ul>
// //           <li>
// //             <h3>
// //               {name}
// //             </h3>
// //           </li>
// //           <li>
// //             <p>
// //               {price}
// //             </p>
// //           </li>
// //           <li>
// //             <p>
// //               {volume}
// //             </p>
// //           </li>
// //         </ul>
// //       </div>
// //     </>
// //   );
// // }

// // Coin.propTypes = {
// //   name: PropTypes.string.isRequired,
// //   price: PropTypes.string.isRequired,
// //   volume: PropTypes.string.isRequired,
// // };

// import { useSelector } from 'react-redux';
// import { selectCoins } from '../redux/coins/coinsSlice';

// export default function CoinList() {
//   const coins = useSelector(selectCoins);

//   return (
//     <div>
//       <h2>Coin List</h2>
//       {coins.coinList?.map((coin) => (
//         <div key={coin.id}>
//           <h3>{coin.name}</h3>
//           <p>{coin.symbol}</p>
//           <p>{coin.price_usd}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectCoins, getCoins } from '../redux/coins/coinsSlice';

export default function Coinlist() {
  const dispatch = useDispatch();
  const { coinList, status, error } = useSelector(selectCoins);
  console.log('coinlist here', coinList);
  console.log('selectcoins here', selectCoins);

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }

  return (
    <div>
      {coinList.data.map((coin) => (
        <div key={coin.id}>
          <p>{coin.name}</p>
          <p>{coin.symbol}</p>
          <p>{coin.price_usd}</p>
        </div>
      ))}
    </div>
  );
}
