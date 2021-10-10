import "./App.css";
import routes from "./router";
import { useRoutes } from "hookrouter";

import "./utils/init";
function App() {
  const routesResult = useRoutes(routes);
  return <div id="home">{routesResult}</div>;
}

export default App;
