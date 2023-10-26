type Props = {
  text: string;
};

const HeadingSecondary = (props: Props) => (
  <h2 className="heading-secondary">{props.text}</h2>
);

export default HeadingSecondary;
