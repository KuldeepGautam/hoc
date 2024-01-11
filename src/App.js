import "./App.css";
import Hoc from "./components/basicExample/hoc";
function App() {
  return <div>Higher-Order Component!</div>;
}

app = Hoc(App);

export default App;
