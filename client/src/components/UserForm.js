import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { CustomInputFields } from "./customInputFields/CustomInputFields";
import { postUser } from "./helper/axiosHelper";

export const UserForm = ({ getUser }) => {
  const [newUser, setNewUser] = useState({});
  const inputFields = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "name",
      type: "text",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "lastname",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "email",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
    },
  ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await postUser(newUser);
    toast[status](message);

    status === "success" && getUser();
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <h2>User Registration Form</h2>
      <hr />
      {inputFields.map((item, i) => (
        <CustomInputFields key={i} {...item} onChange={handleOnChange} />
      ))}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
