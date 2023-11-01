import Input from "./components/Input";
import Button from "./components/Button";
import { useRef } from "react";
import Form, { type FormHandle } from "./components/Form";

function App() {
  const customFormRef = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customFormRef.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customFormRef}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
