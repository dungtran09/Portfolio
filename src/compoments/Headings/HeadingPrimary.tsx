type Props = {
  text: string;
};

const HeadingPrimary = (props: Props) => (
  <h1 className="heading-primary">{props.text}</h1>
);

export default HeadingPrimary;
