import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
} from "solid-js";
import "./App.module.css";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  const timer = setInterval(() => setCount(count() + 1), 1000);
  createEffect(() => console.log("The latest count is: ", count()));
  const current = createMemo(() => count() * 2);
  onCleanup(() => clearInterval(timer));
  return (
    <>
      <h1>Hello, Solid!</h1>
      <div>signal: {count()}</div>
      <div>memo: {current()}</div>
    </>
  );
};

export default App;
