type Props = {
  children: React.ReactNode;
};

const GridContainer = (props: Props) => {
  const { children } = props;
  return <div className="row">{children}</div>;
};

export default GridContainer;
