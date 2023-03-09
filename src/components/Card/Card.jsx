import {Container, Boton, Tarjetas, Tarjetas2} from "./styledComponents";

export default function Card(props) {
   return (
      <Container>
         <Boton onClick={props.onClose}>X</Boton>
         <img src={props.image} alt="" />
         <Tarjetas>{props.name}</Tarjetas>
         <Tarjetas2>{props.species}</Tarjetas2>
         <Tarjetas2>{props.gender}</Tarjetas2> 
      </Container>
   );
}
