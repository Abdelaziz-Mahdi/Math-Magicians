import { expect } from '@jest/globals';
import renderer from 'react-test-renderer';
import Quote from '../Quote';

it('renders Api component', () => {
  const component = renderer.create(<Quote />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
