import { puppyList } from './data.js';
import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = (puppy) => {
    setFeatPupId(puppy.id);
    setIsButtonClicked(true);
  };

  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);

  return (
    <div className="App">
      <h1 className="title">Puppy Pals List</h1>
      <div className="puppy-container">
        {puppies.map((puppy) => (
          <p
            className="puppy"
            onClick={() => handleClick(puppy)}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        ))}
      </div>
      {!isButtonClicked ? (
        <button className="button" onClick={() => setIsButtonClicked(true)}>
          Play Time
        </button>
      ) : (
        <button className="button" disabled>
          Throw a dog a bone!
        </button>
      )}
      {featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;



