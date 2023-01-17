import Table from 'react-bootstrap/Table';

export const UserTable = ({userList}) => {
  
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            userList.map(({_id, fName, lName, email}) =>  <tr key={_id}>
            <td>{fName}</td>
            <td>{lName}</td>
            <td>{email}</td>
          </tr>)
          }
         
         
        </tbody>
      </Table>
    );
    }


