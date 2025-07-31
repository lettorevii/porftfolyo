import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <>
                <motion.section
                    variants={staggerContainer()}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="w-full py-96 px-4 flex justify-center" // py-20 = dikey padding biraz daha fazla
                >
                    <span className="hash-span" id={idName}>&nbsp;</span>
                    <div className="max-w-7xl w-full">
                        <Component />
                    </div>
                </motion.section>
                <div className="w-full flex">
                    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-gray-400 text-[17px] max-w-3xl leading-[30px]">


                    </motion.p>

                </div>
            </>

        );
    };

export default SectionWrapper;
