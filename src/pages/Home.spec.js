import React from 'react';
import { fireEvent, render } from '../test-utils';
import Home from './Home';

describe('Home', () => {
  it('should allow sorting of the grid', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('row-0 pilot-1'));
    fireEvent.click(getByTestId('header-Id'));
    expect(getByTestId('row-1 pilot-1'));
  });

  it('should allow deleting from the grid', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('row-0 pilot-1'));
    fireEvent.click(getByTestId('delete-1'));
    expect(getByTestId('row-0 pilot-2'));
  });
});