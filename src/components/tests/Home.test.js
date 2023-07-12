import renderer from 'react-test-renderer';
import Home from '../Home';

test('renders Calculator component', () => {
  const component = renderer.create(<Home />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
