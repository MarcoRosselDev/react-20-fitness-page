import "./gallery.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../components/Header";

function Gallery() {
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fugiat
        nihil fugit nemo et! Facere, id impedit.
      </Header>
    </>
  );
}

export default Gallery;
