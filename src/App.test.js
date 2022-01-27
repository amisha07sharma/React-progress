import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

describe("When everything is fine", () => {

  beforeEach(() =>{
    render(<App/>)
  })
  test("should render App Component", () => {
  });

  test("should select the children that is being passed to Label Tag", () => {
    const a = screen.getByText("Text :")
    expect(a).toBeInTheDocument();
  });

  test("should select the input element by its role", () => {
    const a = screen.getByRole("textbox")
    expect(a).toBeInTheDocument()
  });

  test("should select a label by its text",() => {
    screen.getByLabelText("Text :")
  });

  test("should select an input element by its placeholder text",() => {
    screen.getByPlaceholderText("text")
  });

  test("should give null for whatever", () => {
    expect(screen.queryByRole("whatever")).toBeNull();
  })
});