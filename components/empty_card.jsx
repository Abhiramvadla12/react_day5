import { Component } from 'react';
import './emptycard.css'
export default class EmptyCard extends Component {
  render() {
    const { data } = this.props;
    console.log("data after receiving is:", data);
     // Check if data is available and has required properties
     if (!data) {
        return <p>Data is loading...</p>;
      }
  
      const { image, name, myRating, genre, suggest } = data;
    return (
      <>
        <div className="filled_cards">
          {/* Check if image exists, and use a default image if not */}
          <img src={image || "../images/png-clipart-http-404-graphy-error-others-3d-computer-graphics-photography-thumbnail.png"} alt="Image not found" className='full_image'/>
          <p>Name: {name}</p>
          <p>My rating: {myRating}</p>
          <p>Genre: {genre}</p>
          <p>Suggestion: {suggest}</p>
        </div>
      </>
    );
  }
}

