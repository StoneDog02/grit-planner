import type { MetaFunction, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, useFetcher } from "@remix-run/react";
import React, { useState, useEffect } from "react";
import { Resend } from "resend";

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

interface ActionData {
  success?: boolean;
  error?: string;
  message?: string;
}

export const action: ActionFunction = async ({ request }) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formData = await request.formData();

  // Safely extract and validate form data
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  // Validate all required fields are present and are strings
  if (
    !name ||
    !email ||
    !phone ||
    !message ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    typeof message !== "string"
  ) {
    return json(
      { success: false, error: "All fields are required and must be valid." },
      { status: 400 }
    );
  }

  try {
    const { data: resendData, error } = await resend.emails.send({
      from: "Grit Construction <onboarding@resend.dev>",
      to: ["stoney.harward@gmail.com"],
      subject: `New Contact Form Message from ${
        name.charAt(0).toUpperCase() + name.slice(1)
      }`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${
          name.charAt(0).toUpperCase() + name.slice(1)
        }</p>
        <p><strong>Email:</strong> ${email.toLowerCase()}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return json(
        {
          success: false,
          error: `Failed to send email: ${error.message}`,
        },
        { status: 500 }
      );
    }

    return json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    return json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      },
      { status: 500 }
    );
  }
};

export default function Contact() {
  const fetcher = useFetcher<ActionData>();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Effect to handle successful form submission
  useEffect(() => {
    if (fetcher.data?.success) {
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Hide after 3 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [fetcher.data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });

    fetcher.submit(formDataToSubmit, {
      method: "post",
      action: "/contact",
    });
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Contact Information
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-700">
                Get in touch with us for any questions about our services or to
                discuss your project.
              </p>
              <dl className="mt-8 text-base text-gray-700">
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
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Send us a message
            </h2>
            <div className="mt-3">
              {fetcher.data?.error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  {fetcher.data.error}
                </div>
              )}

              {showSuccess && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  {fetcher.data?.message}
                </div>
              )}

              <fetcher.Form
                method="post"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
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
                      className="py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
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
                      className="py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
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
                      className="py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
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
                      className="py-3 px-4 block w-full shadow-sm focus:ring-2 focus:ring-blue-500 border-2 border-gray-400 rounded-md outline-none"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={fetcher.state === "submitting"}
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {fetcher.state === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </fetcher.Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
