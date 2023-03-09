import {Container, Boton, Tarjetas} from "./styledComponents";

export default function Card(props) {
   return (
      <Container>
         <Boton onClick={props.onClose}>X</Boton>
         <img src={props.image} alt="" />
         <Tarjetas>{props.name}</Tarjetas>
         <Tarjetas>{props.species}</Tarjetas>
         <Tarjetas>{props.gender}</Tarjetas>  
      </Container>
   );
}
