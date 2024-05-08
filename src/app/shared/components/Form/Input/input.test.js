import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { useForm } from "react-hook-form";
import AppInput from "./AppInput";

describe("AppInput", () => {
  test("renders input with label and placeholder", () => {
    const { getByText, getByPlaceholderText } = render(
      <AppInput label="Username" name="username" control={useForm().control} />
    );

    expect(getByText("Username")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter Username")).toBeInTheDocument();
  });

  test("displays error message if error exists", async () => {
    const { getByText } = render(
      <AppInput label="Username" name="username" control={useForm().control} />
    );

    const errorMessage = "This field is required";
    fireEvent.blur(screen.getByRole("textbox"));
    await screen.findByText(errorMessage);

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  test("changes input value when typing", () => {
    const mockControl = useForm().control;
    const { getByPlaceholderText } = render(
      <AppInput label="Username" name="username" control={mockControl} />
    );

    const input = getByPlaceholderText("Enter Username");
    fireEvent.change(input, { target: { value: "test" } });

    expect(input).toHaveValue("test");
  });
});
