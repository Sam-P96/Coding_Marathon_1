import React, { useState } from 'react';
import './RecipeManager.css';

let nextId = 8;

function AddRecipeManager({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    time: '',
    difficulty: '',
    author: '',
  });

  function addRecipe() {
    const newRecipe = {
      id: `rec-0${nextId++}`,
      title: formData.title,
      slug: formData.slug,
      description: formData.description,
      time: Number(formData.time),
      author: formData.author,
      difficulty: formData.difficulty,
      image: '',
    };

    if (onAddRecipe) {
      onAddRecipe(newRecipe);
    }

    setFormData({
      title: '',
      slug: '',
      description: '',
      difficulty: '',
      time: '',
      author: '',
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="recipe-form">
      <h1 className="recipe-form__title">Recipe Collection Manager</h1>

      <div className="recipe-form__inputs">
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
          className="recipe-form__input"
        />
        <input
          type="text"
          name="slug"
          placeholder="Enter Slug"
          value={formData.slug}
          onChange={handleChange}
          className="recipe-form__input"
        />
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          className="recipe-form__input"
        />
        <input
          type="text"
          name="difficulty"
          placeholder="Enter difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="recipe-form__input"
        />
        <input
          type="number"
          name="time"
          placeholder="Enter time (mins)"
          value={formData.time}
          onChange={handleChange}
          className="recipe-form__input"
        />
        <input
          type="text"
          name="author"
          placeholder="Enter Author"
          value={formData.author}
          onChange={handleChange}
          className="recipe-form__input"
        />
        <button onClick={addRecipe} className="recipe-form__button">
          Add Recipe
        </button>
      </div>
    </div>
  );
}

export default AddRecipeManager;
