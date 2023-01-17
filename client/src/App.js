import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";

function App() {
  return (
    <div className="App">
      <section>
        {/* userForm  */}
        <Container>
          <UserForm />
        </Container>
      </section>
      <section>
        <Container>
          {/* table */}
          <UserTable />
        </Container>
      </section>
    </div>
  );
}

export default App;
