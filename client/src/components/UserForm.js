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

  return (
    <Form>
      <h2 className="p-5"> User Registration Form</h2>
      {inputFields.map((item, i) => (
        <CustomInputFields key={i} {...item} />
      ))}

      <Button variant="success">Add User</Button>
    </Form>
  );
};
