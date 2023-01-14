import { useEffect } from 'react';
import './App.css';
import video from './food.mp4'

function App() {

  const MY_ID = "555f7793";
  const MY_KEY = "7e32abad983506e1b2864d32183aab30"

  useEffect(() => {
    const getRecipe = async () => {
    const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await responce.json();
    console.log(data.hits)
    }
    getRecipe();
  }, [])
  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      
      <div className='container'>
        <form>
          <input>
          </input>
        </form>

        <div className='container'>
          <button>
            <img src='https://img.icons8.com/fluency/48/000000/fry.png' className='icons'/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

//https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}