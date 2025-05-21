import './poke.scss';

interface PokemonType {
    pokemon: {
        name: string,
        url: string
    }
}

let data: PokemonType[];

const TypePage = async ({params}: {params: {type: string}}) => {
    const {type} = await params;

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const jsonData = await response.json();
      data = await jsonData.pokemon;

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    return(
        <div className="pok__types_type">
            <div className='pok__types--title'>

            <h1>{type}</h1>
            </div>

            <div className='pok__types--items'>
            {data.map((item:PokemonType, index:number) => 
            <p key={index}>{item.pokemon.name}</p>)}
            </div>

        </div>
    )

}

export default TypePage