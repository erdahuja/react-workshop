import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Tommy", animal: "dog", breed: "Labra" }),
    React.createElement(Pet, {
      name: "Jerry",
      animal: "mouse",
      breed: "BigBlackRat"
    }),
    React.createElement(Pet, {
      name: "Catty",
      animal: "cat",
      breed: "SweetCat"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
