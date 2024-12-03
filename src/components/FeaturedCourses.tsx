"use client";

import React from "react";
import Link from "next/link";
import coursesData from "../data/music_courses.json"; // Ensure the path is correct
import { BackgroundGradient } from "./ui/background-gradient";

// Define the structure of the Course
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  // Check if the JSON structure is as expected
  const featuredCourses: Course[] = (coursesData.courses || []).filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      {/* Section Header */}
      <div>
        <div className="text-center">
          <h1 className="text-base text-blue-400 font-semibold tracking-wide uppercase">
            Courses
          </h1>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the courses
          </p>
        </div>
      </div>

      {/* Courses List */}
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                {/* Replace this with actual content */}
                {/* <div className="p-4 bg-white rounded shadow-lg text-center">
                  <h2 className="text-xl font-bold text-gray-900">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    {course.description}
                  </p>
                  <p className="text-blue-500 font-semibold mt-4">
                    ${course.price}
                  </p>
                  <p className="text-gray-700 italic">By {course.instructor}</p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-4 inline-block px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div> */}

                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-4 inline-block px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* View All Courses Link */}
      <div className="mt-20 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
