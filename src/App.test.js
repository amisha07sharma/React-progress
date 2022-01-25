import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("When everything is fine", () => {
  test("should render App Component", () => {
    render(<App/>);
  });
});