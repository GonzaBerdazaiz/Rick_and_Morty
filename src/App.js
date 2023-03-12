import {useState} from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import style from "./App.module.css";

function App () {

  const [characters, setCharacters] = useState([]);
  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "e37c2a7dab26.98658492c093d0d26653";
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters([...characters, data]);
        } else {
          alert('Algo salio mal');
        }
    });
}
  const onClose = (id) =>{
    setCharacters(characters.filter((char) => char.id !== id));
  }
  
  return (
    <div className={style.App} >
      <div className={style.NavBar} >
        <Nav onSearch={onSearch} />
      </div>
      <hr></hr>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  )
}

export default App