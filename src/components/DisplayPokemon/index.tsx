import { PokemonType } from "@/utils/types";
import Image from "next/image";
import './pokemon.scss';

const DisplayPokemon =({id, name, image, types}:PokemonType) => {
    return(
        <div className="pokemon__content">
            <div className="pokemon__content--title">
                <span>ID: {id}</span>
                <span>name: {name}</span>
                
            </div>
            <div className={`pokemon__content--img-${types[0]}`}>
                {/* dynamically created classes for the css 
                 */}
                <Image src={image} alt={name} height={300} width={300} />
            </div>    
            <div className="pokemon__content--types">
                {types.map((item:string, index:number) => 
                <span key={index} className={`pokemon__content--${item}`}>{item}</span>)}
            </div>        
        </div>
    )
}

export default DisplayPokemon