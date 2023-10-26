import "./PageHeader.scss";

type Props = {
  title: string;
  subTitle?: string;
};

const PageHeader = (props: Props) => (
  <div className="page-header">
    <HeadingPrimary text={props.title} />
    <div className="page-header__subtitle">
      <h4 className="heading-sub-1">{props.subTitle}</h4>
    </div>
  </div>
);

export default PageHeader;
