const Reciepe = ({
  id,
  title,
  slug,
  description,
  time,
  difficulty,
  author,
  image,
}) => {
  return (
    <div>
      <section>
        <h1>{title}</h1>
        <h3>{slug}</h3>
        <p>{description}</p>
        <p>{time}</p>
        <h4>{difficulty}</h4>
        <p>{author}</p>
        <img src={image}></img>
      </section>
    </div>
  );
};

export default Reciepe;
