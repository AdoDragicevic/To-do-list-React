import { TodosProvider } from "./contexts/todos";
import Title from "./components/Title/Title";
import Form from "./components/New/New";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";

import "./App.css";

const App = () => (
  <div className="App">
    <TodosProvider>
      <Title />
      <Form />
      <List />
      <Menu />
    </TodosProvider>
  </div>
)

export default App;