import { useState } from "react";
import Container from "../../compoments/Container/Container";
import PageHeader from "../../compoments/PageHeader/PageHeader";
import Section from "../../compoments/Section/Section";

import { Tabs } from "antd";
import { TabsPosition } from "antd/es/tabs";

const Portfolio = () => {
  const [mode, setMode] = useState<TabsPosition>("top");

  return (
    <Section>
      <PageHeader title="My Projects" />
      <Container>
        {
          <div className="tabs">
            <ul className="tab__list">
              <li className="tab__link">All</li>
              <li className="tab__link">HTML5 & CSS3</li>
              <li className="tab__link">React</li>
              <li className="tab__link">Angular</li>
              <li className="tab__link">Node/Angular</li>
              <li className="tab__link">Node/React</li>
            </ul>

            <div className="tab-grid tab-columns">
              <div className="tab__item">
                <div className="card">
                  <div className="card__image">
                    <img
                      src="https://s3.amazonaws.com/creativetim_bucket/products/55/thumb/opt_mdp_angular_thumbnail.jpg?1551358096"
                      alt=""
                    />
                  </div>
                  <div className="card__content">
                    <span className="card__title">Card Title</span>
                    <p className="card__text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Cum qui quae commodi necessitatibus. Enim placeat qui
                      ipsum dolor, quas consequuntur accusamus quae non .
                    </p>
                    <p className="card__stack">
                      Angular, Node, Sequelize, Express
                    </p>
                  </div>
                  <div className="card__actions">
                    <a className="card__link" href="#">
                      Live preview
                    </a>
                    <a className="card__link" href="#">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: 220 }}
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i);
            return {
              label: `Tab-${id}`,
              key: id,
              disabled: i === 28,
              children: `Content of tab ${id}`,
            };
          })}
        />
      </Container>
    </Section>
  );
};

export default Portfolio;
