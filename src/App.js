import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import RouteHandler from "./RouteHandler";
import routes from "./RouteHandler/routes.json";
import Header from "./componets/Header";
import { BrowserRouter } from "react-router-dom";
import BakeryItemsContext from "./contextApi";
import { useState } from "react";
const App = () => {
  const [quantity, setQuantity] = useState({});
  const increaseHandler = (key) => {
    if (typeof key == "undefined") return;

    if (!quantity[key]) return setQuantity((prev) => ({ ...prev, [key]: 1 }));

    setQuantity((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };
  const decreaseHandler = (key) => {
    if (typeof key == "undefined") return;

    if (!quantity[key]) return;

    setQuantity((prev) => ({ ...prev, [key]: prev[key] - 1 }));
  };
  return (
    <div className="App">
      <BrowserRouter>
        <BakeryItemsContext.Provider
          value={{ quantity, increaseHandler, decreaseHandler }}
        >
          <Header />
          <RouteHandler routes={routes} />
        </BakeryItemsContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
export { BakeryItemsContext };
