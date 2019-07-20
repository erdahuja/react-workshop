const Pet = (props) => {
  const { name, animal, breed } = props;
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Tommy", animal: "dog", breed: "Labra" }),
    React.createElement(Pet, { name: "Jerry", animal: "mouse", breed: "BigBlackRat" }),
    React.createElement(Pet, { name: "Catty", animal: "cat", breed: "SweetCat" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));