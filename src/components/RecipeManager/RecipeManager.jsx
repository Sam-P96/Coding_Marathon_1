import { useState } from 'react';
import Reciepe from './Reciepe';
import AddRecipeManager from './AddRecipe';
import { recipes } from './reciepeData';

function RecipeManager() {
  const [recipe, setRecipe] = useState(recipes);

  const handleRemove = (recipeId) => {
    setRecipe(recipe.filter((item) => item.id !== recipeId));
  };

  return (
    <section>
      <div>
        <AddRecipeManager recipes={recipe} />
        {recipe.map((data) => {
          return <Reciepe key={data.id} {...data} onRemove={handleRemove} />;
        })}
      </div>
    </section>
  );
}

export default RecipeManager;
