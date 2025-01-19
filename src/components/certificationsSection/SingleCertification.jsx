import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleCertification = ({ certification }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="h-auto w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4"
    >
      <p className="font-bold text-cyan flex gap-2 items-center justify-center">
        <span className="text-4xl">
          <certification.icon />
        </span>
        {certification.main}
      </p>
      <p className="text-orange pt-2 text-center">{certification.company}</p>
      <p className="text-lightGrey text-center">{certification.date}</p>
      <ul className="list-none mt-4 pl-4 flex flex-col justify-center items-center">
        {certification.courses.map((course, index) => {
          return (
            <li key={index} className="mb-2 hover:text-orange">
              <a href={course.link} target="blank">
                {course.name}
              </a>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SingleCertification;
