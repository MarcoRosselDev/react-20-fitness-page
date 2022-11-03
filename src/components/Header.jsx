const Header = ({ title, image, children }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <img src={image} alt="Header Background Image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
