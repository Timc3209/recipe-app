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

  toggle = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  };

  onEdit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.editRecipe();
  };

  onDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.deleteRecipe();
  };

  render() {
    const { isOpen } = this.state;
    const { url, title, ingredients, directions } = this.props;

    return (
      <ListGroupItem className="recipe">
        <a
          onClick={this.onDelete}
          className="delete"
          href="/#"
          data-testid="btnDelete"
        >
          <FontAwesomeIcon icon={faTrash} />
        </a>
        <a
          onClick={this.onEdit}
          className="edit"
          href="/#"
          data-testid="btnEdit"
        >
          <FontAwesomeIcon icon={faEdit} />
        </a>
        <a
          onClick={this.toggle}
          className="toggle bg-primary"
          href="/#"
          data-testid="btnToggle"
        >
          <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} />
          <span className="text-white">{title}</span>
        </a>
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
