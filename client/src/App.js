import "./App.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./components/UserForm";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { getUser } from "./components/helper/axiosHelper";
import { UserTable } from "./components/UserTable";

function App() {
  const [userList, setuserList] = useState([]);

  const fetchUser = async () => {
    const result = await getUser();
    console.log(result);
  };
  return (
    <div className="App">
      <section>
        <Container>
          {/* UserForm */}
          <UserForm />
        </Container>
      </section>
      <section>
        <Container>
          {/* UserTable */}
          <UserTable />
        </Container>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
