type Props = {
  start?: string;
  end?: string;
  company?: string;
  description?: string;
  role?: string;
  link?: string;
};

const TimelineItem = (props: Props) => (
  <div className="timeline__item">
    <h5 className="timeline__period">
      {props.start} - {props.end}
    </h5>
    <span className="timeline__text">{props.company}</span>
    <h4 className="heading-tertiary">{props.role}</h4>
    <p className="paragraph">{props.description}</p>

    <div className="text-right">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
        className="btn-sm btn-sm__primary u-margin-top-smaller"
      >
        Let me see ⟶
      </a>
    </div>
  </div>
);

export default TimelineItem;
