import {CardsContainer} from "./styledComponents";
import Card from '../Card/Card';

export default function Cards(props,onClose) {
   const { characters } = props;
   return (
      <CardsContainer>
         {characters.map(({id,name,species,gender,image})=>{
            return(
               <Card
                  id={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={onClose}
               />
            );
         })}
      </CardsContainer>
   );
}
