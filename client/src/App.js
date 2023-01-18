import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
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
        {/* userForm  */}
        <Container>
          <UserForm getUser={getUser} />
          <hr />
        </Container>
      </section>
      <section>
        <Container className="mt-5">
          <div> {userList.length} User Found!</div>
          {/* table */}
          <UserTable userList={userList} getUser={getUser} />
        </Container>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
