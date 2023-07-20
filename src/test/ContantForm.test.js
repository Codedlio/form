import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../components/ContactForm"
test("submitting the form adds a new contact", () => {
    const handleAddContact = jest.fn();
    render(<ContactForm onAddContact={handleAddContact} />);
  
    const nameInput = screen.getByLabelText(/name/i);
    const phoneInput = screen.getByLabelText(/phone/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const typeSelect = screen.getByLabelText(/type/i);
    const addButton = screen.getByRole("button", { name: /add contact/i });
  
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.change(descriptionInput, { target: { value: "Test description" } });
    fireEvent.change(typeSelect, { target: { value: "person" } });
    fireEvent.click(addButton);
  
    expect(handleAddContact).toHaveBeenCalledWith({
      id: expect.any(Number),
      name: "John Doe",
      phone: "1234567890",
      description: "Test description",
      type: "person",
    });
  });