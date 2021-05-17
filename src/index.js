import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
const initialState = {
  contact: [
    {
      id: 0,
      name: "Stepan",
      number: 380961111111,
      star: false
    },{
      id: 1,
      name: "Ivan",
      number: 380321111111,
      star: false
    },
    {
      id: 1,
      name: "Skrekliam",
      number: 380654392123,
      star: true
    },
    {
      id: 1,
      name: "Henry",
      number: 142027681235,
      star: false
    },
  ],
};
// {
//   id: 0,
//   name: "Stepan",
//   number: 380961111111,
// },

export const store = createStore(
  allReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
