type Props = {
  image: string;
  title: string;
  about: string;
  stack: string;
  preview: string;
  github: string;
};

const Card = (props: Props) => (
  <div className="card">
    <div className="card__image">
      <img src={props.image} className="project__img" alt="" />
    </div>
    <div className="card__content">
      <span className="card__title">{props.title}</span>
      <p>{props.about}</p>
      <p className="card__stack">{props.stack}</p>
    </div>
    <div className="card__actions">
      <a className="card__link" href={props.preview}>
        Live preview
      </a>
      <a className="card__link" href={props.github}>
        GitHub
      </a>
    </div>
  </div>
);

export default Card;
