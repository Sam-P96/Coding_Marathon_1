import './RecipeManager.css';

const Reciepe = ({
  id,
  title,
  slug,
  description,
  time,
  difficulty,
  author,
  image,
  onRemove,
}) => {
  return (
    <div className="recipe-card">
      <section className="recipe-card__body">
        <h1 className="recipe-card__title">{title}</h1>
        <h3 className="recipe-card__slug">/{slug}</h3>
        <p className="recipe-card__description">{description}</p>

        <div className="recipe-card__meta">
          <span className="recipe-card__time">⏱ {time} mins</span>
          {difficulty && <h4 className="recipe-card__badge">{difficulty}</h4>}
          <span className="recipe-card__author">By {author}</span>
        </div>

        {image && (
          <img src={image} alt={title} className="recipe-card__image" />
        )}

        <button onClick={() => onRemove(id)} className="recipe-card__button">
          Remove
        </button>
      </section>
    </div>
  );
};

export default Reciepe;
