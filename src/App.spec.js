import React from 'react';
import { fireEvent, render } from './test-utils';
import App from './App';

describe('App', () => {
  it('should be able to navigate to a pilot, and back', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('home'));
    fireEvent.click(getByTestId('show-1'));
    expect(getByTestId('pilot'));
    fireEvent.click(getByTestId('back'));
    expect(getByTestId('home'));
  });
});
