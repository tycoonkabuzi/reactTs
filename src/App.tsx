import "./App.css";
import Hello from "./components/Hello";

function App() {
  const age: number = 18;

  return (
    <>
      <Hello age={age} name="Tycoon" />
    </>
  );
}

export default App;
