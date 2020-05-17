import { ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE, RecipeState } from "../types";

export const addRecipe = (payload: RecipeState) => {
  return {
    type: ADD_RECIPE,
    payload,
  };
};

export const editRecipe = (payload: RecipeState) => {
  return {
    type: EDIT_RECIPE,
    payload,
  };
};

export const deleteRecipe = (payload: RecipeState) => {
  return {
    type: DELETE_RECIPE,
    payload,
  };
};
