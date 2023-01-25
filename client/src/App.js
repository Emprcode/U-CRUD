import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";
import { useEffect, useState } from "react";
import { fetchUser } from "./components/helper/axiosHelper";

function App() {
  const [userList, setUserList] = useState([]);

  const getUser = async () => {
    const { result } = await fetchUser();
    setUserList(result);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="App">
      <section>
        <Container>
          {/* UserForm */}
          <UserForm getUser={getUser} />
        </Container>
      </section>
      <hr />
      <section>
        <Container>
          {userList.length} user Found!
          {/* userTable */}
          <UserTable userList={userList} getUser={getUser} />
        </Container>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
