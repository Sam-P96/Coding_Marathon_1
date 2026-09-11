import { useState } from 'react';
import Reciepe from './Reciepe';

import { recipes } from './reciepeData';

function RecipeManager(data) {
  const [reciepe, setReciepe] = useState(recipes);
  return (
    <section>
      {/* <Title title="featured" subtitle="reciepe" /> */}
      <div>
        {recipes.map((data) => {
          return <Reciepe key={data.id} {...data} />;
        })}
      </div>
    </section>
  );
}

export default RecipeManager;
