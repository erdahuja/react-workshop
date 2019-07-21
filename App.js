import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Tommy" animal="dog" breed="Labra" />
      <Pet name="Jerry" animal="mouse" breed="BigBlackRat" />
      <Pet name="Catty" animal="cat" breed="SweetCat" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));