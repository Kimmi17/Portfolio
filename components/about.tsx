"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Business Administration</span>, I decided
        to become a self-taught developer. I would say that is the decision I
        never regret in my life.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of addressing intricate issues and devising innovative
        solutions. I am familiar with multiple programming languages such as{" "}
        <span className="font-medium">
          Java, Javascript, Typescript, C#, Python.
        </span>{" "}
        . My core stack is{" "}
        <span className="font-medium">
          {" "}
          React, NextJS, Material UI, ShadCN, Tailwind, Redux, Jest, testing
          library …
        </span>
        .For the back-end side, I can work well with{" "}
        <span className="font-medium">
          ExpressJS, Prisma, Spring boot, hibernate combine with SQL or NoSQL
          database - for example: MySQL, PostgreSQL, MongoDB.
        </span>{" "}
        I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>
    </motion.section>
  );
}
