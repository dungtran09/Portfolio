import { Link } from "react-router-dom";
import Container from "../../compoments/Container/Container";
import GridContainer from "../../compoments/Gird/GridContainer";
import GridItem from "../../compoments/Gird/GridItem";

const Home = () => (
  <section className="section-profile">
    <Container>
      <GridContainer>
        <GridItem styles="col-6 u-margin-bottom-small">
          <div className="profile__box">
            <div className="profile__image"></div>
          </div>
        </GridItem>
        <GridItem styles="col-6">
          <div className="profile__detail">
            <h4 className="heading-sub">Web Developer</h4>
            <h1 className="heading-primary">Tran Dung</h1>
            <p className="paragraph-md">
              <i>"An investment in knowledge pays the best interest."</i>
            </p>
            <div className="u-margin-top-small">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="/resume.pdf"
                className="btn btn__primary"
              >
                Download CV
              </a>
              <Link to="/contact" className="btn btn__secondary">
                Contact
              </Link>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </Container>
  </section>
);

export default Home;
