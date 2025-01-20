import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, feature, tools, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange text-center">
          {name}
        </h2>
        <h2 className="md:text-2xl sm:text-xl text-orange text-center">
          {feature}
        </h2>
        <h2 className="text-xl font-thin text-white font-special text-center">
          {tools}
        </h2>
        <a
          href={link}
          target="blank"
          className="mt-3 text-xl flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer justify-self-center"
        >
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-orange">
        <a href={link} target="blank">
          <img src={image} alt="website image" className="w-full h-full" />
        </a>
      </div>
    </motion.div>
  );
};

export default SingleProject;
