"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: " ThriftEx: The Sustainable Style Exchange",
    description: "A negotiation-based e-commerce platform for second-hand clothes",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MohiniVora/ThriftEx",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Loan Default Risk Prediction",
    description: "A machine learning-powered web app that predicts the risk of loan default based on borrower data.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MohiniVora/loan-default-risk",
    previewUrl: "https://loan-default-risk.onrender.com",
  },
  {
    id: 3,
    title: "Diwali Sales Analysis",
    description: "Data analyticts project using EDA",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MohiniVora/DataAnalytics-/blob/main/DiwaliSales_DA.ipynb",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Soul Buddy - Mental Health Support",
    description: "A web app that provides journaling and mood tracking features to support mental well-being.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/MohiniVora/SoulBuddy/tree/master",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Notes Summarization Tool",
    description: "Text summarization using Hugging Face Transformers and Streamlit",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MohiniVora/Notes-Summarization-",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Spotify Music Analysis - Data Analysis",
    description: "A data analysis project that explores Spotify's music dataset to uncover trends and insights in Power BI.",
    image: "/images/projects/6.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MohiniVora/DataAnalytics-/blob/main/Spotify%20Songs%20Analysis.pdf",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
