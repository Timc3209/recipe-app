import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders recipe app", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText("Recipe App");
  expect(titleElement).toBeInTheDocument();
});
