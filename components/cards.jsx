import  { Component } from "react";
import { cards_data } from "../data/cards_data";
import EmptyCard from "./empty_card";
import './cards.css';

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null, // State to hold the selected card's data
    };
  }

  handleRoute = (data) => {
    // console.log(data);
    this.setState({ selectedCard: data }); // Update the state with the selected card's data
  };

  render() {
    const { selectedCard } = this.state;

    return (
      <>
        <div className="cards">
          {cards_data.map((element, index) => (
            <div className="anime_cards" key={index}>
              <img src={element.image} alt="Image not found" />
              <p>Name: {element.name}</p>
              <p>My rating: {element.myRating}</p>
              <p>Genre: {element.genre}</p>
              <p>Suggestion: {element.suggest}</p>
              <button onClick={() => this.handleRoute(element)}>Full screen</button>
            </div>
          ))}
        </div>
        {selectedCard && <EmptyCard data={selectedCard} />}
      </>
    );
  }
}
