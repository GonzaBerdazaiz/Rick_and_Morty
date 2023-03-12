import {Container, Boton, Tarjetas, Tarjetas2} from "./styledComponents";

export default function Card(id,name,species,gender,image,onClose) {
   return (
      <Container>
         <Boton onClick={() => onClose(id)}>X</Boton>
         <img src={image} alt="" />
         <Tarjetas>{name}</Tarjetas>
         <Tarjetas2>{species}</Tarjetas2>
         <Tarjetas2>{gender}</Tarjetas2> 
      </Container>
   );
}
