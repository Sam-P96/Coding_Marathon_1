import { useState } from 'react';
import Reciepe from './Reciepe';
import AddRecipeManager from './AddRecipe';
import { recipes } from './reciepeData';

function RecipeManager() {
  const [recipe, setRecipe] = useState(recipes);

  const handleRemove = (recipeId) => {
    setRecipe(recipe.filter((item) => item.id !== recipeId));
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipe((prev) => [...prev, newRecipe]);
  };
  return (
    <section>
      <div>
        <AddRecipeManager onAddRecipe={handleAddRecipe} />
        {recipe.map((data) => {
          return <Reciepe key={data.id} {...data} onRemove={handleRemove} />;
        })}
      </div>
    </section>
  );
}

export default RecipeManager;
