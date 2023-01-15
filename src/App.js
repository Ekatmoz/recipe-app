import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "555f7793";
  const MY_KEY = "7e32abad983506e1b2864d32183aab30"

  const [search, setSearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado')


  useEffect(() => {
    const getRecipe = async () => {
    const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await responce.json();
    console.log(data.hits)
    setMyRecipes(data.hits)
    }
    getRecipe();
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setSearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(search)
  }
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={search}>
          </input>
        </form>

        <div className='container'>
          <button>
            <img src='https://img.icons8.com/fluency/48/000000/fry.png' alt="egg" className='icons'/>
          </button>
        </div>
      </div>
      {myRecipes.map(element => (
        <MyRecipesComponent 
          image={element.recipe.image} 
          cal={element.recipe.calories} 
          label={element.recipe.label} 
          ingredients={element.recipe.ingredientLines}
          id={element.id}/>
        ))}
    </div>
  );
}

export default App;

//https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}