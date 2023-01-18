import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";

import { deleteUser, updateUser } from "./helper/axiosHelper";

export const UserTable = ({ userList, getUser }) => {
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
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, i) => (
            <tr key={item._id}>
              <td>{item.fName}</td>
              <td>{item.lName}</td>
              <td>{item.email}</td>
              <td>
                <Button variant="warning" onClick={() => handleOnEdit(item)}>
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}>
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
