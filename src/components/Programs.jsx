import { FaCrown } from "react-icons/fa";
import SectionHead from "./SectionHead";
import { programs } from "../data";

function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />
      </div>
      <div className="programs__wrapper">
        {programs.map(({ id, icon, title, info, path }) => {
          return <h4 key={id}>{title}</h4>;
        })}
      </div>
    </section>
  );
}

export default Programs;
