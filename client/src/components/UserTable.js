import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import { CustomModal } from "./customModal/CustomModal";
import { deleteUser, updateUser } from "./helper/axiosHelper";

export const UserTable = ({ userList, getUser }) => {
  const [show, setShow] = useState(false);

  const handleOnDelete = async (_id) => {
    if (window.confirm(`Do you want to delete this user?`)) {
      const { status, message } = await deleteUser(_id);
      toast[status](message);
      getUser();
    }
  };

  const handleOnEdit = async (obj) => {
    // const result = await updateUser(obj);
    // console.log(result);
    setShow(!show);
  };

  return (
    <div>
      {show && <CustomModal show={show} setShow={setShow} />}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(({ _id, fName, lName, email }) => (
            <tr key={_id}>
              <td>{fName}</td>
              <td>{lName}</td>
              <td>{email}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => handleOnEdit({ _id, fName, lName, email })}>
                  Edit
                </Button>{" "}
                <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
