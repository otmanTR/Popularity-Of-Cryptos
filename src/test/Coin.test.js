import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Coin from '../components/Coin';

describe('Coin Card Component', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(<BrowserRouter><Coin /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
