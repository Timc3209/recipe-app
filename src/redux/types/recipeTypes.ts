export const ADD_RECIPE = "ADD_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";

export interface RecipeState {
  id: string;
  url: string;
  title: string;
  ingredients: string[];
  directions: string[];
}

export interface RecipeListState {
  items: Array<RecipeState>;
}

interface AddRecipeAction {
  type: typeof ADD_RECIPE;
  payload: RecipeState;
}

interface EditRecipeAction {
  type: typeof EDIT_RECIPE;
  payload: RecipeState;
}

interface DeleteRecipeAction {
  type: typeof DELETE_RECIPE;
  payload: RecipeState;
}

export type RecipeActionTypes =
  | AddRecipeAction
  | EditRecipeAction
  | DeleteRecipeAction;
