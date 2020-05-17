import React from "react";
import { FormGroup, Label, Input, FormFeedback, InputProps } from "reactstrap";

const TextInput = ({
  label,
  type,
  name,
  value,
  onChange,
  errorMessage,
  rows,
}: InputProps) => (
  <FormGroup>
    <Label>{label}</Label>
    <Input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      invalid={errorMessage !== ""}
      rows={rows}
    />
    <FormFeedback>{errorMessage}</FormFeedback>
  </FormGroup>
);

export default TextInput;
