import React, { createElement } from "react";
import Nav from "./Nav";
import Kunal from "./Kunal";
import "./App.css";

function App(props) {
  return (<div>
    <Nav className="heading"/>
    <h1 className="heading">{props.title}</h1>
    <p>{props.modi}</p>
    <input type="text" />
    
    <Kunal />
    </div>);

    // return React.createElement("div",{},
    // React.createElement("h1", {}, "hjkjdhds") );
}


export default App;