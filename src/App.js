import Person from "./components/Person";
import './App.css';

function App() {
  return (
    <div className="App">
      <Person firstName={"Jane"} lastName={"Doe"} hairColor={"Black"} age={45} />
      <Person firstName={"John"} lastName={"Smith"} hairColor={"Brown"} age={88} />
    </div>
  );
}

export default App;
