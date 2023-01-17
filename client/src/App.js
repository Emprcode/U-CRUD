import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
function App() {
  const [userList, setUserList] = useState([]);

  // const getUser = async () => {};
  // console.log(getUser);
  return (
    <div className="App">
      <section>
        {/* userForm  */}
        <Container>
          <UserForm />
          <hr />
        </Container>
      </section>
      <section>
        <Container className="mt-5">
          <div> 10 User Found!</div>
          {/* table */}
          <UserTable />
        </Container>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
