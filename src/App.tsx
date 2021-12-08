import { TodosProvider } from "./contexts/todos";
import Header from "./components/Header/Header";
import Form from "./components/New/New";
import List from "./components/List/List";
import Menu from "./components/Menu/Menu";

import "./styles/main.scss";

const App = () => (
  <div className="container">
    <TodosProvider>
      <Header />
      <Form />
      <List />
      <Menu />
    </TodosProvider>
  </div>
)

export default App;