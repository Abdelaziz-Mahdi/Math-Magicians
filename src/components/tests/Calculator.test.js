import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('renders Calculator component', () => {
  const component = renderer.create(<Calculator />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
