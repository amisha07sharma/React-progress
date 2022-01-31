import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import {getUser} from "./Components/getUser";
import {mocked} from "ts-jest/utils";


jest.mock("./Components/getUser");
const mockedGetUser = mocked(getUser,true);
describe("When everything is fine", () => {
 
  beforeEach(async () => {
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
  })
  test("should render App Component",() => {
    render(<App/>);
  });

  test("should select the children that is being passed to Label Tag", () => {
    render(<App/>)
    const a = screen.getByText("Text :")
    expect(a).toBeInTheDocument();
  });

  test("should select the input element by its role", () => {
    render(<App/>)
    const a = screen.getByRole("textbox")
    expect(a).toBeInTheDocument()
  });

  test("should select a label by its text",() => {
    render(<App/>)
    screen.getByLabelText("Text :")
  });

  test("should select an input element by its placeholder text",() => {
    render(<App/>)
    screen.getByPlaceholderText("text")
  });

  test("should give null for whatever", () => {
    render(<App/>)
    expect(screen.queryByRole("whatever")).toBeNull();
  })
});