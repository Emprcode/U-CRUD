import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInputFields } from "./customInputFields/CustomInputFields";
import { postUser } from "./helper/axiosHelper";
import { toast } from "react-toastify";

export const UserForm = ({fetchUser}) => {
  const [newUser, setNewUser] = useState({});
  const inputFields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "sam",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "smith",
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
      placeholder: "*******",
      required: true,
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

    status === "success" && fetchUser()
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <h2 className="p-3">Hello World</h2>
      {inputFields.map((item, i) => (
        <CustomInputFields key={i} {...item} onChange={handleOnChange} />
      ))}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
