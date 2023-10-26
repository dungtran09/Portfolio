type Props = {
  children: React.ReactNode;
  styles: string;
};

const GridItem = (props: Props) => {
  const { children, styles } = props;
  return <div className={styles}>{children}</div>;
};

export default GridItem;
