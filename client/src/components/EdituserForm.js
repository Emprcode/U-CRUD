import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { CustomInputFields } from "./customInputFields/CustomInputFields";
import { updateUser } from "./helper/axiosHelper";

export const EditUserForm = ({ getUser, selectUser }) => {
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    setNewUser(selectUser);
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await updateUser(newUser);
    toast[status](message);

    status === "success" && getUser();
  };

  const inputFields = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "name",
      type: "text",
      value: newUser.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "lastname",
      type: "text",
      value: newUser.lName,
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "email",
      type: "email",
      value: newUser.email,
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
      value: newUser.password,
    },
  ];

  return (
    <Form onSubmit={handleOnSubmit}>
      <h2>Update User Information</h2>
      <hr />
      {inputFields.map((item, i) => (
        <CustomInputFields key={i} {...item} onChange={handleOnChange} />
      ))}

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};
