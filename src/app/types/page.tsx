let allTypes: string[];
import './types.scss';

const Types = () => {

  const fetchTypes = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/type/");
      const data = await response.json();
      allTypes = data.results.map((item: { name: any }) => item.name);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchTypes();
  return (
    <div className="pokemon__types">
    {allTypes && allTypes.filter((_, index) => index < 18)
    .map((item: string, index:number) => (
      <a
        key={index}
        href=""
        className={`pokemon__content--${item}`}
      >
        {item}
      </a>
    ))}

    </div>

  )

 
};

export default Types;
