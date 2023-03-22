import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Coins from './components/Coins';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Coins />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
