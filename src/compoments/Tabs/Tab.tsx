import { Component } from "react";

type Props = {
  activeTab: string;
  label: string;
  title: string;
  onClick: (value: string) => void;
};

class Tab extends Component<Props> {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, title },
    } = this;

    let className = "tab__link";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        {title}
      </li>
    );
  }
}

export default Tab;
