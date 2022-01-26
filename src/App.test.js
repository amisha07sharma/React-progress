import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

describe("When everything is fine", () => {
  test("should render App Component", () => {
    render(<App/>);
  });

  test("should select the children that is being passed to Label Tag", () => {
    render(<App/>);
    const a = screen.getByText("Text :")
    expect(a).toBeInTheDocument();
  });

  test("should select the input element by its role", () => {
    render(<App/>)
    screen.getByRole("textbox")
  })
});