import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <main>
      <Container as={Button} type="button" />
    </main>
  );
}

export default App;
