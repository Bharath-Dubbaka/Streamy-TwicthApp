// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/App";
// import reducers from "./reducers";
// import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, composeEnhancers(applyMiddleware()));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
// );

import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import reducers from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
// import reportWebVitals from './reportWebVitals';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
