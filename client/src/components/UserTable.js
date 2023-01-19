import Table from 'react-bootstrap/Table';

export const UserTable = ({userList}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((item) =>  <tr key={item._id}>
          <td>{item.fName}</td>
          <td>{item.lName}</td>
          <td>{item.email}</td>
        </tr>)}
       
       
      </tbody>
    </Table>
  );
}
