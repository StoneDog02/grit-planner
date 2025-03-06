import type { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import React, { useState } from "react";

export default function RequestBid() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    projectDescription: "",
    timeline: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Request a Bid
            </h2>
            <p className="mt-4 text-lg text-white">
              Fill out the form below and we'll get back to you with a detailed
              quote for your project.
            </p>
          </div>

          <div className="mt-12">
            <Form method="post" onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-white"
                >
                  Project Type
                </label>
                <select
                  name="projectType"
                  id="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="renovation">Renovation</option>
                  <option value="new-construction">New Construction</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="projectDescription"
                  className="block text-sm font-medium text-white"
                >
                  Project Description
                </label>
                <textarea
                  name="projectDescription"
                  id="projectDescription"
                  rows={4}
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-white"
                >
                  Desired Timeline
                </label>
                <input
                  type="text"
                  name="timeline"
                  id="timeline"
                  placeholder="e.g., ASAP, 3 months, etc."
                  required
                  value={formData.timeline}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit Request
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
