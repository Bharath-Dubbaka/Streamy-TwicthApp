// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
// import { Route } from "react-router-dom";

import React from "react";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";

function App() {
  // console.log("object");
  // 709126930926-0deao81at3d7her2dcibbgl4q0258hom.apps.googleusercontent.com
  return (
    <div className="App ui container">
      <BrowserRouter>
        <Header />

        <Route path="/" exact component={StreamList} />
        <Route path="/stream/new" component={StreamCreate} />
        <Route path="/stream/delete" exact component={StreamDelete} />
        <Route path="/stream/edit" exact component={StreamEdit} />
        <Route path="/stream/show" exact component={StreamShow} />
      </BrowserRouter>
    </div>
  );
}

export default App;
