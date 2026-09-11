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
    <div>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5px',
        }}
      >
        <h1>{title}</h1>
        <h3>{slug}</h3>
        <p>{description}</p>
        <p>{time}</p>
        <h4>{difficulty}</h4>
        <p>{author}</p>
        <img src={image}></img>
        <button onClick={() => onRemove(id)}>Remove</button>
      </section>
    </div>
  );
};

export default Reciepe;
