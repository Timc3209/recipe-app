import React from "react";
import { ListGroupItem, Collapse } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faTrash,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import ImagePreview from "./ImagePreview";

interface Props {
  title: string;
  url: string;
  ingredients: string[];
  directions: string[];
  editRecipe: () => void;
  deleteRecipe: () => void;
}

interface States {
  isOpen: boolean;
}

export default class Recipe extends React.Component<Props, States> {
  readonly state: States = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const {
      url,
      title,
      ingredients,
      directions,
      editRecipe,
      deleteRecipe,
    } = this.props;

    return (
      <ListGroupItem className="recipe">
        <span
          onClick={deleteRecipe}
          className="recipe-action"
          data-testid="btnDelete"
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
        <span
          onClick={editRecipe}
          className="recipe-action"
          data-testid="btnEdit"
        >
          <FontAwesomeIcon icon={faEdit} />
        </span>
        <span
          onClick={this.toggle}
          className="recipe-toggle bg-primary"
          data-testid="btnToggle"
        >
          <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} />
          <span className="recipe-title text-white">{title}</span>
        </span>
        <Collapse isOpen={isOpen}>
          <div className="content-recipe">
            <ImagePreview src={url} className="image-recipe" />
            <h4 className="text-success">Ingredients</h4>
            <ul className="square-list">
              {ingredients &&
                ingredients.map((ingredient: string, index: number) => (
                  <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4 className="text-success">Directions</h4>
            <ul className="number-list">
              {directions &&
                directions.map((direction: string, index: number) => (
                  <li key={index}>{direction}</li>
                ))}
            </ul>
          </div>
        </Collapse>
      </ListGroupItem>
    );
  }
}
