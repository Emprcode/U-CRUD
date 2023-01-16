import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <section>
        <Container>
          <UserForm />
        </Container>
      </section>
      <section>Table</section>
    </div>
  );
}

export default App;
