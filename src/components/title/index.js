import './style.css';

const Title = (props) => {
  return (
    <section className="title">
      <h2 className="title__name">{props.Name}</h2>
    </section>
  );
}

export default Title;