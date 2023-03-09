import styled from "styled-components";

const Recuadro = styled.div`
   background-color: blue;
   width: fit-content;
   padding: 1em;
   heigth: fit-content;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
`;

const Tarjetas = styled.h2`
   background-color: blue;
   border-radius: 10px;
   padding; 1em;
   display:flex;
   justify-content: space-between;
`;

const Boton = styled.button`
   border: 0px;
   background-color: white;
   width: fit-content; 
   heigth: fit-content;
   display: flex;
   flex-direction: column;
   border-radius: 10%;
`;

export default function Card(props) {
   return (
      <Recuadro>
         <Boton onClick={props.onClose}>X</Boton>
         <Tarjetas>{props.name}</Tarjetas>
         <Tarjetas>{props.species}</Tarjetas>
         <Tarjetas>{props.gender}</Tarjetas>
         <img src={props.image} alt="" />
      </Recuadro>
   );
}
