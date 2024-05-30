import { useState } from "react";
import PropTypes from "prop-types";
import { Backdrop, ModalContent } from "./styled.jsx";
import Input from "@components/Input";
import Button from "@components/Button";
import Stack from "@components/Stack";

const ModalForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    // Initialize your form data here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalContent>
        <h2 className="header text-center">Modal Form</h2>
        <form onSubmit={handleSubmit}>
          <Stack variant="v" gap="6px">
            <Input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title || ""}
              onChange={handleChange}
              maxWidth
            />
            <Input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount || ""}
              onChange={handleChange}
              maxWidth
            />
            {/* Add more form fields as needed */}
            <Stack>
              <Button onClick={onClose} variant="secondary" size="lg">
                Close
              </Button>
              <Button type="submit" size="lg">
                Submit
              </Button>
            </Stack>
          </Stack>
        </form>
      </ModalContent>
    </Backdrop>
  );
};

ModalForm.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ModalForm;
