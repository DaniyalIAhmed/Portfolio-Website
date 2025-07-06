"use client";

import CountUp from "react-countup";

const stats = [
  {
    title: "Projects Completed",
    count: 11,
  },
  {
    title: "Years of experience",
    count: 1,
  },
  {
    title: "Technologies mastered",
    count: 5,
  },
  {
    title: "Code Commits",
    count: 1000,
  },
];

const Stats = () => {
  return (
    <section className="pt-4, pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto my-10 xl:mt-0">
        <div className="flex gap-6 flex-col md:flex-row items-center justify-center max-w-[80vw] mx-auto flex-wrap">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex gap-3 justify-center items-center xl:justify-start"
              >
                <span className="text-xl leading-snug">{stat.title}</span>
                <CountUp
                  end={stat.count}
                  duration={5}
                  delay={2}
                  className="text-3xl xl:text-5xl font-extrabold"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
