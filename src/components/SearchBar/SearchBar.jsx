import styled from "styled-components";

const Bar = styled.div`
   width: 20em;
   display:flex;
   justify-content: space-between;
`;

const Input = styled.div`
   border:0px;
   border-radius: 15px 0px 0px 15px;
   background-color: white;
   width: 11.8em;   
`;

const Boton = styled.div`
   border:0px;
   border-radius: 0px 15px 15px 0px;
   background-color: white;
   width: 6em;
   height: 2em;
   padding-right: 2em;
   display:flex;
   justify-content: center;
`;

export default function SearchBar(onSearch) {
   return (
      <Bar>
         <Input type='search' />
         <Boton onClick={(id)=>{onSearch(id)}}>Agregar</Boton>
      </Bar>
   );
}
