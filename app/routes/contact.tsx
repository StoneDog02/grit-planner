import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import React, { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us - Grit Construction" },
    {
      name: "description",
      content:
        "Get in touch with Grit Construction for your construction needs.",
    },
  ];
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Contact Information
            </h2>
            <div className="mt-3">
              <p className="text-lg text-white">
                Get in touch with us for any questions about our services or to
                discuss your project.
              </p>
              <dl className="mt-8 text-base text-white">
                <div>
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="ml-3">contact@gritconstruction.com</span>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Address</dt>
                  <dd className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="ml-3">
                      123 Construction Ave
                      <br />
                      Building City, ST 12345
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Send us a message
            </h2>
            <div className="mt-3">
              <Form
                method="post"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Send Message
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
