import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'
import {getUser} from "./Components/getUser";
import {mocked} from "ts-jest/utils";


jest.mock("./Components/getUser");
const mockedGetUser = mocked(getUser,false);
describe("When everything is fine", () => {
 
  beforeEach(async () => {
    mockedGetUser.mockClear();
    render(<App/>);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
  })
  test("should render App Component",async () => {
    render(<App/>);
    await waitFor(() => expect(mockedGetUser).toHaveBeenCalled());
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

describe("when the component fetches the user successfully", () => {
    beforeEach(() => {
      mockedGetUser.mockClear();
    })
    test ("should call getUser once",async () => {
      render(<App/>);
      await waitFor(() => expect(mockedGetUser).toHaveBeenCalledTimes(1));
    })
})