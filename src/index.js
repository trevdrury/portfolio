import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { init } from "emailjs-com";
import reduxThunk from "redux-thunk";
import projects from "./projects.json";
import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  projects,
  composeEnhancers(applyMiddleware(reduxThunk))
);

init("user_Xu9bjCk2ejmCws6nfA2rm");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
