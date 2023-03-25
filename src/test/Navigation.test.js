import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../components/Navigation';

describe('NavBar Component', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(<BrowserRouter><NavBar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
