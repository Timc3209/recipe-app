import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

interface MyProps {
  open: boolean;
  title: string;
  submitModal: () => void;
  closeModal: () => void;
  children: React.ReactNode;
}

const RecipeModal = ({
  open,
  submitModal,
  closeModal,
  title,
  children,
}: MyProps) => (
  <Modal isOpen={open} centered={true} fade={false}>
    <ModalHeader toggle={closeModal} className="bg-success">
      <span className="text-white">{title}</span>
    </ModalHeader>
    <ModalBody>{children}</ModalBody>
    <ModalFooter centered="true">
      <Button
        color="success"
        size="lg"
        block
        onClick={submitModal}
        data-testid="btnSave"
      >
        Save
      </Button>
    </ModalFooter>
  </Modal>
);

export default RecipeModal;
