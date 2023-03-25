import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import CoinInfo from '../components/CoinInfo';

describe('CoinInfo Component', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(<BrowserRouter><CoinInfo /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
