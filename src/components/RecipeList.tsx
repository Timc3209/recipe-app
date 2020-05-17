import React from "react";
import { connect } from "react-redux";
import { Button, ListGroup } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { addRecipe, editRecipe, deleteRecipe } from "../redux/actions";
import { RecipeState } from "../redux/types";
import { AppState } from "../redux/reducers";
import Recipe from "./Recipe";
import RecipeModal from "./RecipeModal";
import TextInput from "./TextInput";
import ImageInput from "./ImageInput";

interface Props {
  items: Array<RecipeState>;
  addRecipe: typeof addRecipe;
  editRecipe: typeof editRecipe;
  deleteRecipe: typeof deleteRecipe;
}

interface Errors {
  recipeTitle: string;
  recipeIngredients: string;
  recipeDirections: string;
}

interface States {
  modalOpen: boolean;
  modalTitle: string;
  recipeID: string | null;
  recipeUrl: string;
  recipeTitle: string;
  recipeIngredients: string;
  recipeDirections: string;
  errors: Errors;
}

class RecipeList extends React.Component<Props, States> {
  readonly state: States = {
    modalOpen: false,
    modalTitle: "",
    recipeID: null,
    recipeUrl: "",
    recipeTitle: "",
    recipeIngredients: "",
    recipeDirections: "",
    errors: {
      recipeTitle: "",
      recipeIngredients: "",
      recipeDirections: "",
    },
  };

  openCreateModal = () => {
    this.setState({
      modalOpen: true,
      modalTitle: "New Recipe",
      recipeID: null,
      recipeUrl: "",
      recipeTitle: "",
      recipeIngredients: "",
      recipeDirections: "",
    });
  };

  openEditModal = (item: RecipeState) => {
    const recipeIngredients = item.ingredients.join(",");
    const recipeDirections = item.directions.join(",");

    this.setState({
      modalOpen: true,
      modalTitle: `Edit ${item.title}`,
      recipeID: item.id,
      recipeUrl: item.url,
      recipeTitle: item.title,
      recipeIngredients,
      recipeDirections,
    });
  };

  submitModal = () => {
    const {
      recipeID,
      recipeUrl,
      recipeTitle,
      recipeIngredients,
      recipeDirections,
      errors,
    } = this.state;

    let isValid = true;

    if (recipeTitle === "") {
      isValid = false;
      errors.recipeTitle = "Please enter a name";
    }

    if (recipeIngredients === "") {
      isValid = false;
      errors.recipeIngredients = "Please enter ingredients";
    }

    if (recipeDirections === "") {
      isValid = false;
      errors.recipeDirections = "Please enter a directions";
    }

    if (isValid === false) {
      this.setState({ errors });
      return false;
    }

    const ingredients = recipeIngredients.split(",");
    const directions = recipeDirections.split(",");

    const data: RecipeState = {
      id: recipeID === null ? uuidv4() : recipeID,
      url: recipeUrl,
      title: recipeTitle,
      ingredients,
      directions,
    };

    if (recipeID === null) {
      this.props.addRecipe(data);
    } else {
      this.props.editRecipe(data);
    }

    this.closeModal();
    console.log("dsdsa");
  };

  deleteRecipe = (item: RecipeState) => {
    this.props.deleteRecipe(item);
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
      errors: {
        recipeTitle: "",
        recipeIngredients: "",
        recipeDirections: "",
      },
    });
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.currentTarget.name;
    const value = event.currentTarget.value;
    const errors = { ...this.state.errors, [key]: "" };

    this.setState<never>({ [key]: value, errors });
  };

  handleLoadLocalFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      const localImageUrl = window.URL.createObjectURL(files[0]);
      this.setState({ recipeUrl: localImageUrl });
    }
  };

  render() {
    const {
      modalOpen,
      modalTitle,
      recipeTitle,
      recipeUrl,
      recipeIngredients,
      recipeDirections,
    } = this.state;
    const { items } = this.props;

    return (
      <div className="container">
        <Button color="primary" size="lg" block onClick={this.openCreateModal}>
          Add Recipe
        </Button>
        <ListGroup className="recipe-list">
          {items &&
            items.map((item: RecipeState, index: number) => (
              <Recipe
                key={index}
                url={item.url}
                title={item.title}
                ingredients={item.ingredients}
                directions={item.directions}
                editRecipe={() => this.openEditModal(item)}
                deleteRecipe={() => this.deleteRecipe(item)}
              />
            ))}
        </ListGroup>
        <RecipeModal
          open={modalOpen}
          title={modalTitle}
          submitModal={this.submitModal}
          closeModal={this.closeModal}
        >
          <ImageInput
            name="recipeUrl"
            label="Select Image"
            image={recipeUrl}
            onChange={this.handleLoadLocalFile}
          />
          <TextInput
            name="recipeTitle"
            label="Title"
            type="text"
            value={recipeTitle}
            onChange={this.onChange}
            errorMessage={this.state.errors.recipeTitle}
          />
          <TextInput
            name="recipeIngredients"
            label="Ingredients (separate by comma)"
            type="textarea"
            value={recipeIngredients}
            onChange={this.onChange}
            errorMessage={this.state.errors.recipeIngredients}
            rows={3}
          />
          <TextInput
            name="recipeDirections"
            label="Directions (separate by comma)"
            type="textarea"
            value={recipeDirections}
            onChange={this.onChange}
            errorMessage={this.state.errors.recipeDirections}
            rows={7}
          />
        </RecipeModal>
      </div>
    );
  }
}

const mapStateToProps = ({ recipe }: AppState) => {
  const { items } = recipe;
  return { items };
};

const mapDispatchToProps = {
  addRecipe,
  editRecipe,
  deleteRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
