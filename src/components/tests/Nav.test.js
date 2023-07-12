import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../Nav';

describe('Tests Nav component', () => {
  it('renders correctly', () => {
    const quotesPage = render(<BrowserRouter><Nav /></BrowserRouter>);
    expect(quotesPage).toMatchSnapshot();
  });
});
