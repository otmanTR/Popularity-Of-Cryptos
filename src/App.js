import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>NotFound</div>} />
    </Routes>
  </>
);

export default App;
