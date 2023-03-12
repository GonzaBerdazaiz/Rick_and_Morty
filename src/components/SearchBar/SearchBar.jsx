import {useState} from 'react';
import style from "./Search.module.css"

export default function SearchBar({onSearch}) {
   
   const [id,setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={style.Barra}>
         <input type='search' className={style.Busqueda} onChange={handleChange}> </input>
         <button className={style.Boton} onClick={() => onSearch(id)}> Agregar </button>
      </div>
   );
}
