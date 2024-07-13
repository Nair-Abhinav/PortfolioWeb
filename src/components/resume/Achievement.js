import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Finalist,"
            subTitle=" ACE Hacks Hackathon:"
            result="Success"
            des="Reached the finals of ACE Hacks Hackathon, showcasing innovative AI and ML solutions."
          />
          <ResumeCard
            title="Finalist,"
            subTitle="S4DS Datahack 2.0:"
            result="Success"
            des="Secured finalist in S4DS Datahack 2.0, demonstrating data science proficiency and problem-solving skills."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Publicity Co Committee Member,"
            subTitle="DJ Init.Ai Club"
            result="Success"
            des="Actively contributing to the publicity initiatives of DJ init.Ai Club, promoting club events and activities to the wider audience."
          />
          <ResumeCard
            title="JP Morgan Chase,"
            subTitle="Student Engagement Program"
            result="Success"
            des="JPMC Actively contributing and learning in the engagement program conducted by JPMC"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
