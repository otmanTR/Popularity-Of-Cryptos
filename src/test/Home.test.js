import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Home } from './Home';
import rootReducer from '../redux/rootReducer';

const store = createStore(rootReducer);

test('renders search input and coin items', () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();

  const coinItems = screen.getByTestId('coin-items');
  expect(coinItems).toBeInTheDocument();
});