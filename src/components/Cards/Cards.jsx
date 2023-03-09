import {CardsContainer} from "./styledComponents";
import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <CardsContainer>
         {characters.map(({name,species,gender,image})=>{
            return(
               <Card
                  onClose={() => window.alert('Emulamos que se cierra la card')}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
               />
            );
         })}
      </CardsContainer>
   );
}
