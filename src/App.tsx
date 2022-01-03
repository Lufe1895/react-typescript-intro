import { Counter } from "./components/Counter";
import { CounterRed } from "./components/CounterRed";
import { TimerParent } from "./components/TimerParent";
import { User } from "./components/User";

function App() {
  return (
    <div>
      <h1>React + Typescript</h1>
      <hr />

      <h2>useState</h2>
      <Counter />
      <User />
      <hr />

      <h2>useEffect - useRef</h2>
      <TimerParent />
      <hr />

      <h2>useReducer</h2>
      <CounterRed />
    </div>
  );
}

export default App;
