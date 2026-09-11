import { useState } from 'react';
import Reciepe from './Reciepe';
import AddRecipeManager from './AddRecipe';
import { recipes } from './reciepeData.js';
import './RecipeManager.css';

function RecipeManager() {
  const [recipe, setRecipe] = useState(recipes);

  const handleRemove = (recipeId) => {
    setRecipe(recipe.filter((item) => item.id !== recipeId));
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipe((prev) => [...prev, newRecipe]);
  };

  return (
    <section className="recipe-manager">
      <div className="recipe-manager__container">
        <AddRecipeManager onAddRecipe={handleAddRecipe} />

        <div className="recipe-list">
          {recipe.map((data) => {
            return <Reciepe key={data.id} {...data} onRemove={handleRemove} />;
          })}
        </div>
      </div>
    </section>
  );
}
//.

export default RecipeManager;
