import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
// import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom'
// import {mocked} from "ts-jest/utils";
import CustomInput from './CustomInput';

describe("when everything is OK", () => {
    test("should call the onChange callback handler", async() => {
        const onChange = jest.fn();
        render(<CustomInput/>)
        await fireEvent.change(screen.getByRole("textbox"), {target:{value:"Hello"}})
        expect(onChange).toHaveBeenCalledTimes(1);
    })
})