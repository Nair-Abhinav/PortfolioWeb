import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div >
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4 ">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col  gap-10">
          <ResumeCard
            title="BTech in Information Technology"
            subTitle="University of Mumbai (2022 - 2026)"
            result="9.1/10"
            des="The Bachelor of Technology (BTech) is the 4 year full-time undergraduate course leading to the engineering degree."
          />
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="Mt Carmel Junior College (2020 - 2022)"
            result="78.5%"
            des="Higher secondary education is a stage of education which includes students of class 11th and 12"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Holy Family Convent High School (2020 passout)"
            result="85.6%"
            des="Secondary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education