import React from "react";
export default (props) => {
  const { name, animal, breed } = props;
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};
