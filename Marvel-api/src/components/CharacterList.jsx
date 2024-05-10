import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = ({ onCharacterClick }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=58386d4e6d3815f652c3a400e8afa7fe&hash=8b294df414fc707e5a21f71822e51f5f&limit=100`);
      setCharacters(response.data.data.results);
    };

    fetchCharacters();
  }, []); 

  return (
    <div>
      <h2>Marvel Characters</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id} onClick={() => onCharacterClick(character.id)}>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;