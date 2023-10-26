import Container from "../../compoments/Container/Container";
import GridContainer from "../../compoments/Gird/GridContainer";
import GridItem from "../../compoments/Gird/GridItem";
import HeadingSecondary from "../../compoments/Headings/HeadingSecondary";
import PageHeader from "../../compoments/PageHeader/PageHeader";
import Section from "../../compoments/Section/Section";

const Contact = () => (
  <Section styles="u-no-padding-bottom">
    <PageHeader title="Contact" />

    <Container>
      <GridContainer>
        <GridItem styles="col-12">
          <div className="contact">
            <HeadingSecondary text="Get in Touch" />

            <div className="contact__box">
              <h2 className="paragraph-lg u-margin-bottom-small">
                Want to work together or have any questions?
              </h2>
              <a
                href="mailto:victor.onwuzor@gmail.com"
                className="btn btn__primary"
              >
                Say Hello
                <span role="img" aria-label="emoji">
                  👋
                </span>
              </a>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </Container>
  </Section>
);

export default Contact;
