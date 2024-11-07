"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { FaHtml5, FaCss3, FaJs, FaFigma, FaUnity, FaGitAlt, FaTrello } from "react-icons/fa";
import { SiCsharp, SiNuke, SiNextdotjs, SiTailwindcss, SiUnrealengine } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// My About Data
const about = {
  title: "About Me",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  info: [
    { fieldName: "Name", fieldValue: "Nicolás Andrés García Paetz" },
    { fieldName: "Phone", fieldValue: "+31 (0)6 18541643" },
    { fieldName: "Experience", fieldValue: "2 Years" },
    { fieldName: "Nationality", fieldValue: "Chilean, Dominican, German" },
    { fieldName: "Languages", fieldValue: "English, Spanish" },
    { fieldName: "Email", fieldValue: "Nicogarciapaetz@gmail.com" },
  ],
};

// My Experience
const experience = {
  icon: "/assets/resume/icons/badge.svg",
  title: "My Experience",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  items: [
    {
      company: "Stichting GameLab Oost",
      position: "Technical Game Designer Intern",
      duration: "Feb 2024 - July 2024",
    },
    {
      company: "PostNL",
      position: "Postman",
      duration: "Sep 2024 - Present",
    },
    {
      company: "Telus International",
      position: "Customer Service Representative",
      duration: "June 2020 - August 2020",
    },
  ],
};

// My Education
const education = {
  icon: "/assets/resume/icons/cap.svg",
  title: "My Education",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  items: [
    {
      institution: "Saxion University",
      degree: "Creative Media and Game Technologies",
      duration: "Sep 2020 - Present",
    },
    {
      institution: "Madrid Content School",
      degree: "AI tools for creators",
      duration: "June 2024 - July 2023",
    },
    {
      institution: "Dev.F",
      degree: "White Belt, Web Development",
      duration: "Jan 2020 - Feb 2020",
    },
  ],
};

// My Hard Skills
const hardskills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  skillList: [
    { icon: <FaUnity />, name: "Unity" },
    { icon: <SiCsharp />, name: "C#" },
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiNuke />, name: "Nuke" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaTrello />, name: "Trello" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiUnrealengine />, name: "Unreal Engine" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ],
};

// My Soft Skills
const softSkills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  skillList: [
    { skill: "Communication" },
    { skill: "Problem-Solving" },
    { skill: "Adaptability" },
    { skill: "Project Management" },
    { skill: "Team Leader" },
    { skill: "Teamwork" },
  ],
};

const Resume = () => {
  const [selectedSkillType, setSelectedSkillType] = useState("hard");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
          onValueChange={(value) => {
            // Reset to hard skills when returning to the skills section
            if (value === "skills") {
              setSelectedSkillType("hard");
            }
          }}
        >
          <TabsList className="flex flex-col w-full max-w-[320px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-70vh w-full">
            {/* About Me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <div className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                  </div>
              </div>
            </TabsContent>

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid gird-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent xl:text-sm">
                          {item.duration}
                        </span>
                        <h3 className="text-base max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid gird-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent xl:text-sm">
                          {item.duration}
                        </span>
                        <h3 className="text-base max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                {/* Title with Inline Tabs for Hard and Soft Skills */}
                <div className="flex flex-col text-center xl:text-left gap-[30px]">
                  <h3 className="text-4xl font-bold flex items-center justify-center xl:justify-start gap-4">
                    My
                    <Tabs defaultValue="hard" className="inline-block">
                      <TabsList className="flex gap-2">
                        <TabsTrigger
                          value="hard"
                          className={`px-3 py-1 ${
                            selectedSkillType === "hard" ? "text-accent" : ""
                          }`}
                          onClick={() => setSelectedSkillType("hard")}
                        >
                          Hard
                        </TabsTrigger>
                        <TabsTrigger
                          value="soft"
                          className={`px-3 py-1 ${
                            selectedSkillType === "soft" ? "text-accent" : ""
                          }`}
                          onClick={() => setSelectedSkillType("soft")}
                        >
                          Soft
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                    Skills
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {selectedSkillType === "hard"
                      ? hardskills.description
                      : softSkills.description}
                  </p>
                </div>

                <ScrollArea className="h-[400px]">
                  {/* Render Hard Skills as Icons */}
                  {selectedSkillType === "hard" && (
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[25px]">
                      {hardskills.skillList.map((skill, index) => (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[115px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Render Soft Skills as Text with About Me Styling */}
                  {selectedSkillType === "soft" && (
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {softSkills.skillList.map((skill, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-lg">{skill.skill}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
