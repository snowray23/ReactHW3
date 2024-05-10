import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=58386d4e6d3815f652c3a400e8afa7fe&hash=8b294df414fc707e5a21f71822e51f5f&limit=100`);
      setCharacter(response.data.data.results[0]);
    };

    fetchCharacterDetail();
  }, [characterId]);

  return (
    <div>
      {character && (
        <>
          <h2>{character.name}</h2>
          <p>{character.description || 'No description available.'}</p>
          <h3>Comics:</h3>
          <ul>
            {character.comics.items.map((comic, index) => (
              <li key={index}>{comic.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;