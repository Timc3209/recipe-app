import { combineReducers } from "redux";
import * as recipeReducer from "./recipeReducer";
import { RecipeListState } from "../types";

export interface AppState {
  recipe: RecipeListState;
}

export const AppInitialState: AppState = {
  recipe: recipeReducer.INITIAL_STATE,
};

export const rootReducer = combineReducers({
  recipe: recipeReducer.reducer,
});
