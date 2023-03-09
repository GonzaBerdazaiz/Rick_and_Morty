import {Bar, Input, Boton} from "./styledComponents";

export default function SearchBar(onSearch) {
   return (
      <Bar>
         <Input type='search' />
         <Boton onClick={(id)=>{onSearch(id)}}>Agregar</Boton>
      </Bar>
   );
}
