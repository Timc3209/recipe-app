import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Recipe from "../components/Recipe";
import { recipes } from "../config/recipes";

test("renders recipe", () => {
  const TacoRecipe = recipes[0];
  const openEditModal = jest.fn();
  const deleteRecipe = jest.fn();

  const { getByText, getByTestId } = render(
    <Recipe
      key={1}
      url={TacoRecipe.url}
      title={TacoRecipe.title}
      ingredients={TacoRecipe.ingredients}
      directions={TacoRecipe.directions}
      editRecipe={openEditModal}
      deleteRecipe={deleteRecipe}
    />
  );
  const titleElement = getByText(TacoRecipe.title);
  expect(titleElement).toBeInTheDocument();

  fireEvent.click(getByTestId("btnEdit"));
  expect(openEditModal).toHaveBeenCalledTimes(1);

  fireEvent.click(getByTestId("btnDelete"));
  expect(deleteRecipe).toHaveBeenCalledTimes(1);
});
