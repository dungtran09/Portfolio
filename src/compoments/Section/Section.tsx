type Props = {
  children: React.ReactNode;
  styles?: string;
};

const Section = (props: Props) => {
  const { children, styles } = props;
  return <section className={"section " + styles}>{children}</section>;
};

export default Section;
