import ReactDom from "react-dom";
import App from "./App";

//redux
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
