import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_5.jpg";
import { trainers } from "../../data";
import { BsInstagram } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        magnam doloribus itaque aspernatur velit.
      </Header>
      <section className="trainers">
        <div className="cantainer trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {})}
        </div>
      </section>
    </>
  );
};

export default Trainers;
