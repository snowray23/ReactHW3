import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';


const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const handleCharacterClick = (characterId) => {
    setSelectedCharacterId(characterId);
  };

  return (
    <div>
      <h1>Marvel Characters</h1>
      <div style={{ display: 'flex' }}>
        <div>
          <CharacterList onCharacterClick={handleCharacterClick} />
        </div>
        <div>
          <CharacterDetail characterId={selectedCharacterId} />
        </div>
      </div>
    </div>
  );
};

export default App;