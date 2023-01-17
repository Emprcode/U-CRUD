import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CustomInputFields } from "./customInputFields/CustomInputFields";

// const initialState = {
//   fNAme: "",
//   lName: "",
//   email: "",
//   password: "",
// };

export const UserForm = () => {
  const [formData, setFormData] = useState({});
  const inputFields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "john",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "cena",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "example@email.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*****",
      required: true,
    },
  ];

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [value]: name,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h2 className="p-5"> User Registration Form</h2>
      {inputFields.map((item, i) => (
        <CustomInputFields key={i} {...item} onChange={handleOnChange} />
      ))}

      <Button variant="success" type="submit">
        Add User
      </Button>
    </Form>
  );
};
