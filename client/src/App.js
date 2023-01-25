import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <section>
        <Container>
          {/* UserForm */}
          <UserForm />
        </Container>
      </section>
      <section>
        <Container>{/* userTAble */}</Container>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
