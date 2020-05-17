import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import RecipeList from "../components/RecipeList";
import { AppInitialState, rootReducer } from "../redux/reducers";
import { addRecipe, editRecipe, deleteRecipe } from "../redux/actions";
import { RecipeState, RecipeActionTypes } from "../redux/types";
import { v4 as uuidv4 } from "uuid";

test("renders recipelist add/edit/delete", () => {
  const itemID = uuidv4();
  const newItemTitle = uuidv4();
  const updateItemTitle = uuidv4();

  const item: RecipeState = {
    id: itemID,
    url: "",
    title: newItemTitle,
    ingredients: ["a"],
    directions: ["a"],
  };

  const store = createStore(rootReducer, AppInitialState);
  const { getByText, queryByText } = render(
    <Provider store={store}>
      <RecipeList />
    </Provider>
  );

  const titleElement = getByText("Add Recipe");
  expect(titleElement).toBeInTheDocument();

  store.dispatch(addRecipe(item) as RecipeActionTypes);

  const newRecipeCheck = getByText(newItemTitle);
  expect(newRecipeCheck).toBeInTheDocument();

  item.title = updateItemTitle;

  store.dispatch(editRecipe(item) as RecipeActionTypes);

  const editRecipeCheck = getByText(updateItemTitle);
  expect(editRecipeCheck).toBeInTheDocument();

  store.dispatch(deleteRecipe(item) as RecipeActionTypes);

  const deleteRecipeCheck = queryByText(updateItemTitle);
  expect(deleteRecipeCheck).not.toBeInTheDocument();
});
