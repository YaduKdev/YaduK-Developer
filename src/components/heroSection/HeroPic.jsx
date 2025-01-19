import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { GiCircleClaws } from "react-icons/gi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="../../../public/images/CirclePic.png"
        alt="Yadu Krishnan"
        className="max-h-[450px] w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <GiCircleClaws className=" md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-orange blur-md animate-[spin_20s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
