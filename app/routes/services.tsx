import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Our Services - Grit Construction" },
    {
      name: "description",
      content:
        "Professional general contracting and framing services for residential and commercial projects.",
    },
  ];
};

const services = [
  {
    title: "General Contracting",
    description:
      "Full-service general contracting for residential and commercial projects. We manage every aspect of your construction project from start to finish.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "Framing",
    description:
      "Expert framing services for new construction and renovations. We ensure structural integrity and precision in every project.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description:
      "Comprehensive project management services to keep your construction project on time and within budget.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored construction solutions to meet your specific needs and requirements.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Professional Construction Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white mx-auto">
            We provide comprehensive construction services for both residential
            and commercial projects.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="relative">
                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <div className="absolute top-0 left-0 -mt-4 -ml-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-600 text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-black">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-base text-black">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/request-bid"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Request a Bid
          </Link>
        </div>
      </div>
    </div>
  );
}
