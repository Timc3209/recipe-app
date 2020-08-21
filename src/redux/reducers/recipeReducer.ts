import {
  ADD_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  RecipeListState,
  RecipeState,
  RecipeActionTypes,
} from "../types";
import { recipes } from "../../config/recipes";

export const INITIAL_STATE: RecipeListState = {
  items: recipes,
};

export function reducer(state = INITIAL_STATE, action: RecipeActionTypes) {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case EDIT_RECIPE:
      return {
        ...state,
        items: state.items.map((item: RecipeState) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case DELETE_RECIPE:
      return {
        ...state,
        items: state.items.filter(
          (item: RecipeState) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
