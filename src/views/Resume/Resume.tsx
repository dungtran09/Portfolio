import Container from "../../compoments/Container/Container";
import GridContainer from "../../compoments/Gird/GridContainer";
import GridItem from "../../compoments/Gird/GridItem";
import HeadingSecondary from "../../compoments/Headings/HeadingSecondary";
import PageHeader from "../../compoments/PageHeader/PageHeader";
import Section from "../../compoments/Section/Section";
import Skill from "../../compoments/Skill/Skill";
import Timeline from "../../compoments/Timeline/Timeline";
import TimelineItem from "../../compoments/Timeline/TimelineItem";
import data from "../../data/index.json";

const Resume = () => (
  <Section>
    <PageHeader title="Resume" subTitle="Experience" />

    <Container>
      <GridContainer>
        <GridItem styles="col-6">
          <HeadingSecondary text="Experience" />

          <Timeline>
            {data.experiences.map((experience) => {
              return <TimelineItem {...experience} key={experience.company} />;
            })}
          </Timeline>
        </GridItem>

        <GridItem styles="col-6">
          <HeadingSecondary text="Education" />

          <Timeline>
            {data.educations.map((education) => {
              return (
                <div className="timeline__item" key={education.year}>
                  <h5 className="timeline__period">{education.year}</h5>
                  <span className="timeline__text">{education.school}</span>
                  <h4 className="heading-tertiary">{education.degree}</h4>
                </div>
              );
            })}
          </Timeline>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem styles="col-4">
          <HeadingSecondary text="Basic Stack" />

          <Skill skills={data.skills.basics} />
        </GridItem>

        <GridItem styles="col-4">
          <HeadingSecondary text="Framework/Library" />

          <Skill skills={data.skills.libraries} />
        </GridItem>

        <GridItem styles="col-4">
          <HeadingSecondary text="Database" />

          <Skill skills={data.skills.databases} />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem styles="col-4">
          <HeadingSecondary text="Testing Tools" />

          <Skill skills={data.skills.testing} />
        </GridItem>

        <GridItem styles="col-4">
          <HeadingSecondary text="Continuous Integration" />

          <Skill skills={data.skills.integration} />
        </GridItem>

        <GridItem styles="col-4">
          <HeadingSecondary text="Infrastructure" />

          <Skill skills={data.skills.infrastructure} />
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem styles="col-4">
          <HeadingSecondary text="API Specs" />

          <Skill skills={data.skills.api} />
        </GridItem>
      </GridContainer>
    </Container>
  </Section>
);

export default Resume;
