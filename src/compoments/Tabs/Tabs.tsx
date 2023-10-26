import { Component } from "react";
import Tab from "./Tab";
import Card from "../Card/Card";

type Props = {
  projects: {
    label: string;
    image: string;
    alt: string;
    title: string;
    stack: string;
    preview: string;
    github: string;
  }[];
};

type State = {
  activeTab: string;
};

const tabs = [
  {
    label: "all",
    title: "All",
  },
  {
    label: "html",
    title: "HTML5 & CSS3",
  },
  {
    label: "react",
    title: "React",
  },
  {
    label: "angular",
    title: "Angular",
  },
  {
    label: "node-react",
    title: "Node & React",
  },
  {
    label: "node-angular",
    title: "Node & Angular",
  },
];

class Tabs extends Component<Props, State> {
  state = {
    activeTab: "all",
  };

  renderContent = (props: any) => <Card {...props} key={props.label} />;

  onClickTabItem = (tab: any) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ul className="tab__list">
          {tabs.map((tab) => {
            const label = tab.label;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                title={tab.title}
                onClick={onClickTabItem}
              />
            );
          })}
        </ul>
        <div className="tab-grid tab-columns">
          <div className="tab__item">
            {this.props.projects.map((project) => {
              if (project.label !== activeTab) return undefined;
              return this.renderContent(project);
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
