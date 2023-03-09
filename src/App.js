import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'
import style from "./App.module.css"

function App () {
  return (
    <div className={style.App} >
      <div className={style.NavBar} >
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <hr></hr>
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
