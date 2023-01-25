import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomUserForm } from "./customFields/CustomUserForm";
import { postUser } from "./helper/axiosHelper";
import { toast } from "react-toastify";

export const UserForm = () => {
  const [formData, setFormData] = useState({});
  const inputFields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Sam",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "ram",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "your email",
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await postUser(formData);
    toast[status](message);
  };
  return (
    <Form className="p-5 " onSubmit={handleOnSubmit}>
      <h2>User Registration Form</h2>
      {inputFields.map((item, i) => (
        <CustomUserForm key={i} {...item} onChange={handleOnChange} />
      ))}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
