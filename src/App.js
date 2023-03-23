import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Coins from './components/Coins';
import store from './redux/store';
import ShowCoin from './components/ShowCoin';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Coins />} />
            <Route path="/coin/:id" element={<ShowCoin />}> </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
