type Props = {
  children: React.ReactNode;
};

const Timeline = (props: Props) => (
  <div className="timeline">{props.children}</div>
);

export default Timeline;
