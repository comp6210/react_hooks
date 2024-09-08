import { useState, useEffect } from 'react';
import NavMenu from './components/NavMenu';
import MonsterDetail from './components/MonsterDetail';
import './index.css';

function App() {
  // useStates
  const [monsters, setMonsters] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState(null);

  // useEffect fetch JSON data, has two arguments a function and array
  useEffect(
    () => {
      fetch('https://comp6210.github.io/image_hosting/monsters.json')
      .then(response => response.json())
      .then(data => setMonsters(data))
      .catch(error => console.error('Error fetching data', error))
    },
    []
  );

  // function to handle monster selection, state passed onto MonsterDetail
  const handleSelectedMonster = (monster) => {
    setSelectedMonster(monster);
  }


  return (
    <div className="app-container">
      <header>
        <h1>Movie Monsters</h1>
      </header>
     <div className='content'>
     <NavMenu monsters={monsters} onSelectedMonster={handleSelectedMonster} />
     {
      selectedMonster && <MonsterDetail monster={selectedMonster} />
     }
     </div>
    </div>
  )
}

export default App
