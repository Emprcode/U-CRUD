import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import { deleteUser } from "./helper/axiosHelper";

export const UserTable = ({ userList, getUser }) => {
  const handleOnDelete = async (_id) => {
    if (window.confirm(`Are you sure you want to delete this user?`)) {
      const { status, message } = await deleteUser(_id);
      toast[status](message);

      status === "success" && getUser();
    }
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((item) => (
          <tr key={item._id}>
            <td>{item.fName}</td>
            <td>{item.lName}</td>
            <td>{item.email}</td>
            <Button variant="warning">Edit</Button>
            <Button variant="danger" onClick={() => handleOnDelete()}>
              Delete
            </Button>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
