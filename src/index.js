import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStore(reducers)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);



// import React from "react";
// import ReactDOM from "react-dom";
// // import './index.css';
// import reducers from "./reducers";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import App from "./components/App";
// // import reportWebVitals from './reportWebVitals';
// ReactDOM.render(<Provider store={createStore(reducers)}><App />  </Provider>, document.getElementById("root"));
