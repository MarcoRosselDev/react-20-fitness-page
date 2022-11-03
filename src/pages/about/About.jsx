import Header from "../../components/Header";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis a
        ipsum distinctio laboriosam accusantium assumenda quia iusto eius
        consequatur.
      </Header>
    </>
  );
};

export default About;
