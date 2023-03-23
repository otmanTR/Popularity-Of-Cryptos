import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Coins from './components/Coins';
import store from './redux/store';
import CoinPage from './components/CoinPage';

function App() {
  console.log('coinpage', CoinPage);
  console.log('coins', Coins);
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Coins />} />
            <Route path="/coin/:id" element={<CoinPage />}> </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
