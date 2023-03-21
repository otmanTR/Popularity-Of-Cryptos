// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getCoins, selectCoins } from '../redux/coins/coinsSlice';
// // import Coin from '../components/Coins';

// export default function Coins() {
//   // const { coinList, status } = useSelector(selectCoins);
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   if (status === 'idle') {
//   //     dispatch(getCoins());
//   //   }
//   //   if (status === 'succeed') {
//   //     dispatch(getCoins());
//   //   }
//   // }, [status, dispatch]);

//   // console.log('coinlist here', selectCoins);

//   // return (
//   //   <>
//   //     <div>
//   //       {coinList.map((coin) => (
//   //         <Coin
//   //           key={coin.id}
//   //           id={coin.id}
//   //           name={coin.name}
//   //           price={coin.price}
//   //           volume={coin.volume}
//   //         />
//   //       ))}
//   //     </div>
//   //   </>
//   // );
//   const dispatch = useDispatch();
//   const coins = useSelector(selectCoins);

//   useEffect(() => {
//     dispatch(getCoins());
//   }, [dispatch]);

//   if (coins.status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (coins.error) {
//     return (
//       <div>
//         Error:
//         {' '}
//         {coins.error}
//       </div>
//     );
//   }

//   return (
//     <div>
//       {coins.map((coin) => (
//         <div key={coin.id}>
//           <p>{coin.name}</p>
//           <p>{coin.symbol}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
