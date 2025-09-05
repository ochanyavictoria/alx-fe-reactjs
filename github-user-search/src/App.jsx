import ExampleComponent from "./components/ExampleComponent";
import { testService } from "./services/api";

function App() {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <ExampleComponent />
      <p>{testService()}</p>
    </div>
  );
}

export default App;
