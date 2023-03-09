import styled from "styled-components";

const EstiloBarra = styled.div`
   background-color: red;   
   border:0px;
`;

const Input = styled.div`
   border:0px;
   border-radius: 15px 0px 0px 15px;
   background-color: white;

`;

const Boton = styled.div`
   border:0px;
   border-radius: 0px 15px 15px 0px;
   background-color: yellow;
`;

export default function SearchBar(onSearch) {
   return (
      <EstiloBarra>
         <Input type='search' />
         <Boton onClick={(id)=>{onSearch(id)}}>Agregar</Boton>
      </EstiloBarra>
   );
}
