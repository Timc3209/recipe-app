import React from "react";
import RecipeList from "./components/RecipeList";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="header">
            <h1 className="text-success">Recipe App</h1>
          </header>
          <RecipeList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
