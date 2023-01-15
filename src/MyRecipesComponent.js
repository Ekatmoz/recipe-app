const MyRecipesComponent = ({image, cal, label, ingredients, id}) => {
  return ( <div key={id}>
    <div className="container">
      <h2>{label}</h2>
    </div>
    <div className="container">
      <img className="tasty" src={image} alt="food" width="200px"/>
    </div>
    
    <ul className="list" key={id}>
      {ingredients.map(ingredient => (
        <li><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-banking-and-finance-kiranshastry-gradient-kiranshastry.png" className="icon" alt="icon"/>{ingredient}</li>
      ))}
    </ul>
    <div className="container">
    <p className="par">{cal.toFixed()} cal</p>
    </div>
  </div> );
}
 
export default MyRecipesComponent;