import React from "react";
import ReactDOM from "react-dom";
import pf from "petfinder-client";

import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    petfinder.pet.find({
    }).then((data) => {
      let pets;
      if (data.petfinder.pets && data.petfinder.pets.pet) {
        if (Array.isArray(data.petfinder.pets.pet)) {
          pets = data.petfinder.pets.pet;
        } else {
          pets = [data.petfinder.pets.pet];
        }
      } else {
        pets = []
      }
      this.setState({
        pets
      });
    })
  }

  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        {this.state.pets.map(p => (
          <Pet
            key={p.id}
            media={p.media}
            location={`${p.contact.city}, ${p.contact.state}`}
            name={p.name}
            animal={p.animal}
            breed={p.breed} />
        ))
        }
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("root"));