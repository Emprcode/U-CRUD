import "./App.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./components/UserForm";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { getUser } from "./components/helper/axiosHelper";
import { UserTable } from "./components/UserTable";

function App() {
  const [userList, setuserList] = useState([]);

  const fetchUser = async () => {
    const { result } = await getUser();
    console.log(result);
    setuserList(result);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      <section>
        <Container>
          {/* UserForm */}
          <UserForm fetchUser={fetchUser} />
        </Container>
      </section>
      <section>
        <Container>
          {/* UserTable */}
          <UserTable userList={userList} />
        </Container>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
