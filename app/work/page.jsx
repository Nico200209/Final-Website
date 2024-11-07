"use client";

import { motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsX } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import Transition from "@/components/Transition";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Import the project data
import projects from "@/components/Projects"; // Adjust the import path as necessary

// Create the Portal component
const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return ReactDOM.createPortal(children, document.body);
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  // State to track the active index in the modal Swiper
  const [modalActiveIndex, setModalActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  // Refs for controlling Swiper instances
  const modalSwiperRef = useRef(null);

  const handleModalSwiperInit = (swiper) => {
    modalSwiperRef.current = swiper;
    setModalActiveIndex(swiper.activeIndex);
  };

  const handleModalSlideChange = (swiper) => {
    setModalActiveIndex(swiper.activeIndex);
  };

  const slideNextModal = () => {
    if (modalSwiperRef.current) {
      modalSwiperRef.current.slideNext();
    }
  };

  const slidePrevModal = () => {
    if (modalSwiperRef.current) {
      modalSwiperRef.current.slidePrev();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Side */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">
                {project.description}
                <span
                  className="text-accent cursor-pointer ml-2"
                  onClick={() => setModalOpen(true)}
                >
                  Read More
                </span>
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((projectItem, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div
                    className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 cursor-pointer"
                    onClick={() => {
                      setProject(projectItem);
                      setModalOpen(true);
                    }}
                  >
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={projectItem.image}
                        fill
                        className="object-cover"
                        alt={projectItem.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                swiperRef={null}
              />
            </Swiper>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#1a1a1a] pt-16 px-8 pb-8 rounded-lg w-[90vw] h-[90vh] overflow-y-auto text-white relative">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-50"
              onClick={() => setModalOpen(false)}
            >
              <BsX className="text-white text-4xl" />
            </button>

            {/* Carousel at the top */}
            <div className="mb-6 relative">
              {(() => {
                // Prepare slides for modal Swiper
                const modalSlides = [];

                if (project.videoUrl) {
                  modalSlides.push({ type: 'video', url: project.videoUrl });
                }

                project.images.forEach((imageUrl) => {
                  modalSlides.push({ type: 'image', url: imageUrl });
                });

                return (
                  <Swiper
                    onSwiper={handleModalSwiperInit}
                    onSlideChange={handleModalSlideChange}
                    spaceBetween={10}
                    slidesPerView={1}
                    className="h-[400px]"
                  >
                    {modalSlides.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="relative w-full h-full cursor-pointer"
                          onClick={() => {
                            if (slide.type === 'image') {
                              setPreviewImage(slide.url);
                              setPreviewOpen(true);
                            }
                          }}
                        >
                          {slide.type === 'video' ? (
                            <iframe
                              src={slide.url}
                              title="YouTube video"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            ></iframe>
                          ) : (
                            <Image
                              src={slide.url}
                              fill
                              className="object-cover"
                              alt={`Slide ${index}`}
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                    {/* Slider Buttons */}
                    <WorkSliderBtns
                      containerStyles="
                        flex gap-2 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-20 justify-between pointer-events-none
                      "
                      btnStyles="pointer-events-auto bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                      slideNext={slideNextModal}
                      slidePrev={slidePrevModal}
                    />
                  </Swiper>
                );
              })()}

              {/* Custom Pagination Dots */}
              <div className="flex justify-center mt-4">
                {(() => {
                  // Calculate total slides
                  const totalSlides = (project.videoUrl ? 1 : 0) + project.images.length;

                  return [...Array(totalSlides)].map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                        index === modalActiveIndex
                          ? "bg-accent"
                          : "bg-gray-500"
                      }`}
                      onClick={() => modalSwiperRef.current.slideTo(index)}
                    />
                  ));
                })()}
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold mb-6">{project.title}</h2>

            {/* Full Description */}
            <p className="mb-6 text-lg leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Stack Information */}
            <ul className="mb-6 grid grid-cols-2 gap-4">
              {project.stack.map((item, index) => (
                <li key={index} className="text-accent text-lg">
                  {item.name}
                </li>
              ))}
            </ul>

            {/* Interactive Buttons */}
            <div className="flex items-center gap-6 mb-8">
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {isPreviewOpen && (
        <Portal>
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative p-4 bg-[#1a1a1a] rounded-lg">
              <button
                className="absolute top-2 right-2 text-white text-3xl z-50"
                onClick={() => setPreviewOpen(false)}
              >
                <BsX className="text-white text-4xl" />
              </button>
              <div className="w-[80vw] h-[80vh] relative">
                <Image
                  src={previewImage}
                  layout="fill"
                  objectFit="contain"
                  alt="Preview Image"
                />
              </div>
            </div>
          </div>
        </Portal>
      )}
    </motion.section>
  );
};

export default Work;