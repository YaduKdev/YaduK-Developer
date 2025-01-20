import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Wearhaus - Clothing Store",
    feature: "For User & Admin",
    tools: "Angular 19, Tailwind CSS, NgRx Store, NodeJS, MongoDB, Razorpay",
    align: "right",
    image: "./images/website-img-1.jpg",
    link: "https://wearhaus.vercel.app/",
  },
  {
    name: "Cinematix - Movie Booking App",
    feature: "For User & Admin",
    tools: "React, MUI, Redux, NodeJS, MongoDB, Stripe Payments",
    align: "left",
    image: "./images/website-img-2.png",
    link: "https://cinematix-view.onrender.com/",
  },
  {
    name: "Nived V. - Personal Website",
    feature: "Live Project",
    tools: "React, Sass",
    align: "right",
    image: "./images/website-img-3.png",
    link: "https://yadukdev.github.io/NivedV/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              feature={project.feature}
              tools={project.tools}
              link={project.link}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
