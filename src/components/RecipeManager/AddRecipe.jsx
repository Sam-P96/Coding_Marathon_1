import React, { useState } from 'react';
import './RecipeManager.css';

let nextId = 1;

function AddRecipeManager() {
  const [recipe, setRecipes] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    time: '',
    author: '',
  });

  function addRecipe() {
    const newRecipe = {
      id: nextId++,
      title: formData.title,
      slug: formData.slug,
      description: formData.description,
      time: Number(formData.time),
      author: formData.author,
    };
    setRecipes((prev) => [...prev, newRecipe]);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app-container">
      <h1>Recipe Collection Manager</h1>

      <div className="input-section">
        <input
          type="text"
          name="title"
          placeholder="Enter title "
          value={formData.title}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="slug"
          placeholder="Enter Slug"
          value={formData.slug}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          className="input-field"
        />

        <input
          type="number"
          name="time"
          placeholder="Enter time"
          value={formData.time}
          onChange={handleChange}
          className="input-field"
        />

        <input
          type="text"
          name="author"
          placeholder="Enter Author"
          value={formData.author}
          onChange={handleChange}
          className="input-field"
        />
        <button onClick={addRecipe} className="add-button">
          Add Recipe
        </button>
      </div>
    </div>
  );
}

export default AddRecipeManager;
