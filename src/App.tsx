import { TodosProvider } from "./contexts/todos";
import Title from "./components/Title/Title";
import Form from "./components/New/New";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";

import "./styles/main.scss";

const App = () => (
  <div className="container">
    <TodosProvider>
      <Title />
      <Form />
      <List />
      <Menu />
    </TodosProvider>
  </div>
)

export default App;