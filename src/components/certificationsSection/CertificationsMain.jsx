import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AllCertifications from "./AllCertifications";
import CertificationsText from "./CertificationsText";

const CertificationsMain = () => {
  return (
    <div id="certifications" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificationsText />
      </motion.div>
      <AllCertifications />
    </div>
  );
};

export default CertificationsMain;
