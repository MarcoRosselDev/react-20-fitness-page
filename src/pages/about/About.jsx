import Header from "../../components/Header";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo facilis a
        ipsum distinctio laboriosam accusantium assumenda quia iusto eius
        consequatur.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              libero, porro sapiente voluptatibus suscipit non dignissimos odio
              sunt? Lorem ipsum dolor, eligendi nobis consequatur voluptates
              mollitia, asperiores repudiandae iusto assumenda similique
              doloremque? Recusandae consectetur, maiores voluptas quibusdam rem
              quae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              maiores hic placeat sapiente aliquid facilis odit veniam delectus
              assumenda, commodi accusamus!
            </p>
          </div>
        </div>
      </section>
      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              libero, porro sapiente voluptatibus suscipit non dignissimos odio
              sunt? Lorem ipsum dolor, eligendi nobis consequatur voluptates
              mollitia, asperiores repudiandae iusto assumenda similique
              doloremque? Recusandae consectetur, maiores voluptas quibusdam rem
              quae!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              maiores hic placeat sapiente aliquid facilis odit veniam delectus
              assumenda, commodi accusamus!
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, eligendi nobis consequatur voluptates mollitia,
              asperiores repudiandae iusto assumenda similique doloremque?
              Recusandae consectetur, maiores voluptas quibusdam rem quae!
            </p>
            <p>
              Lorem ipsum sapiente aliquid facilis odit veniam delectus
              assumenda, commodi accusamus!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
