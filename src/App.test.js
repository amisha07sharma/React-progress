import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("When everything is fine", () => {
  test("should render App Component", () => {
    render(<App/>);
  });

  test("should select the children that is being passed to Label Tag", () => {
    render(<App/>);
    screen.getByText("Text :")
  })
});