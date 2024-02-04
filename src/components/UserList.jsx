import { Modal, Placeholder } from "rsuite";

export const UserList = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal size={"full"} open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>Ваши планы</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
    </Modal>
  );
};
