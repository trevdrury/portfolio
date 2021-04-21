import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { init } from "emailjs-com";
import projects from "./projects.json";
import App from "./components/App";

const initialState = projects;

const rootReducer = (state = initialState) => {
  return state;
};

const store = createStore(rootReducer, projects);

init("user_Xu9bjCk2ejmCws6nfA2rm");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
