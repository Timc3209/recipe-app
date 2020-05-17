import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
import ImagePreview from "./ImagePreview";

interface MyProps {
  name: string;
  label: string;
  image: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageInput = ({ label, name, image, onChange }: MyProps) => (
  <FormGroup className="image-group">
    <Label for={name} className="btn btn-success mt-2">
      {label}
    </Label>
    <ImagePreview src={image} className="image-preview" />
    <Input
      type="file"
      id={name}
      name={name}
      onChange={onChange}
      className="image-input"
    />
  </FormGroup>
);

export default ImageInput;
