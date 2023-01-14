const MyRecipesComponent = ({image, cal, label, ingredients}) => {
  return ( <div>
    <div className="container">
      <h2>{label}</h2>
    </div>
    <div className="container">
      <img src={image} alt="food" width="200px"/>
    </div>
    
    <ul>
      {ingredients.map(ingredient => (
        <li>{ingredient}</li>
      ))}
    </ul>
    
    <p>{cal.toFixed()} cal</p>
  </div> );
}
 
export default MyRecipesComponent;