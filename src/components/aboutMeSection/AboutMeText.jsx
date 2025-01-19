import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Yadu Krishnan, a highly motivated and aspiring web developer with a
        strong passion for creating innovative and user-friendly digital
        experiences. I am eager to contribute my skills and enthusiasm to a
        dynamic team and learn from experienced professionals in the industry.
        My focus is on developing clean, responsive, and accessible websites
        using the latest technologies, and I am constantly striving to expand my
        knowledge and improve my coding practices. I am a fast learner and a
        quick problem-solver, and I am confident that I can be a valuable asset
        to any organization.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
