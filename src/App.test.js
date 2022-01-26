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
    const a = screen.getByRole("textbox")
    expect(a).toBeInTheDocument()
  })

  test("should select a label by its text",() => {
    render(<App/>)
    screen.getByLabelText("Text :")
  })

  test("should select an input element by its placeholder text",() => {
    render(<App/>)
    screen.getByPlaceholderText("text")
  })

});