import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store.js";
import Counter from "./Counter.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Counter />
  </Provider>,
)