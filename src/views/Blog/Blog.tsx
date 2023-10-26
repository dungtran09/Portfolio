import Container from "../../compoments/Container/Container";
import GridContainer from "../../compoments/Gird/GridContainer";
import GridItem from "../../compoments/Gird/GridItem";
import HeadingSecondary from "../../compoments/Headings/HeadingSecondary";
import PageHeader from "../../compoments/PageHeader/PageHeader";
import Section from "../../compoments/Section/Section";
import data from "../../data/index.json";

const Blog = () => (
  <Section styles="u-no-padding-bottom">
    <PageHeader title="Blog" />

    <Container>
      <GridContainer>
        <HeadingSecondary text="Latest Articles" />

        {data.blogs.map((blog) => {
          return (
            <GridItem styles="col-12" key={blog.title}>
              <h4 className="heading-sub">{blog.date}</h4>
              <h2 className="title">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={blog.link}
                  className="title__link"
                >
                  {blog.title}
                </a>
              </h2>
              <p className="paragraph"> {blog.body} </p>
            </GridItem>
          );
        })}
      </GridContainer>
    </Container>
  </Section>
);

export default Blog;
