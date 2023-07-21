import React from 'react';

const AboutSection = () => {
  return (
    <section
      className="flex items-center justify-center flex-col relative overflow-x-hidden pb-32  bg-grid p-4 gap-1"
      id="about"
    >
      <div className="flex items-center flex-col justify-center py-4">
        <h2 className="text-5xl sm:text-6xl px-2 s:px-4 text-center text-gray-50 lg:text-7xl xl:text-8xl font-[600]  max-w-3xl">
          AALA
        </h2>
        <p className="text-sm font-light px-4 s:px-8 text-center text-gray-100 max-w-3xl uppercase">
          Artificial Intelligence-Assisted Insurance Policy and Gamification
          Platform
        </p>
      </div>
      <div className="flex items-center justify-center p-1">
        <p className="text-sm s:text-base font-normal px-4 s:px-8 text-center text-gray-50 sm:text-xl max-w-3xl">
          AALA algos through testing, validation, and continuous improvement of
          AI algorithms through real-world data analysis and feedback loops AALA
          has described bajaj allianz insurance more beneficial with amount
          settlement ration of 97.9% and claim settlement ration of 99 %.
        </p>
      </div>
     
    </section>
  );
};

export default AboutSection;
