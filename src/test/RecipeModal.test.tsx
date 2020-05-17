import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RecipeModal from "../components/RecipeModal";

test("renders recipe modal", () => {
  const title = "MODALTEST";
  const open = true;
  const submitModal = jest.fn();
  const closeModal = jest.fn();

  const { getByText, getByTestId } = render(
    <RecipeModal
      open={open}
      title={title}
      submitModal={submitModal}
      closeModal={closeModal}
    >
      <span>Test</span>
    </RecipeModal>
  );
  const titleElement = getByText(title);
  expect(titleElement).toBeInTheDocument();

  fireEvent.click(getByTestId("btnSave"));
  expect(submitModal).toHaveBeenCalledTimes(1);
});
