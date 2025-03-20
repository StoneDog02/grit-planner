import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import React, { useState, useEffect } from "react";
import { Resend } from "resend";

// Define the shape of our form data
interface BidRequestForm {
  name: string;
  email: string;
  phone: string;
  contactPreference: string;
  scope: string;
  projectType: string;
  projectDescription: string;
  timeline: string;
}

// Define the response type
interface ActionResponse {
  success: boolean;
  message?: string;
  error?: string;
  emailId?: string;
}

// Server-side action to handle form submission
export const action: ActionFunction = async ({ request }) => {
  // Initialize Resend with your API key - only on server side
  const resend = new Resend(process.env.RESEND_API_KEY);

  const formData = await request.formData();

  // Safely extract and validate form data
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const contactPreference = formData.get("contactPreference");
  const scope = formData.get("scope");
  const projectType = formData.get("projectType");
  const projectDescription = formData.get("projectDescription");
  const timeline = formData.get("timeline");

  // Validate all required fields are present and are strings
  if (
    !name ||
    !email ||
    !phone ||
    !contactPreference ||
    !scope ||
    !projectType ||
    !projectDescription ||
    !timeline ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string" ||
    typeof contactPreference !== "string" ||
    typeof scope !== "string" ||
    typeof projectType !== "string" ||
    typeof projectDescription !== "string" ||
    typeof timeline !== "string"
  ) {
    return json(
      { success: false, error: "All fields are required and must be valid." },
      { status: 400 }
    );
  }

  const data: BidRequestForm = {
    name,
    email,
    phone,
    contactPreference: contactPreference as string,
    scope,
    projectType,
    projectDescription,
    timeline,
  };

  try {
    const { data: resendData, error } = await resend.emails.send({
      from: "Grit Construction <no-reply@grit-built.com>",
      to: ["gritconstruction2023@gmail.com"],
      subject: `New Bid Request from ${
        data.name.charAt(0).toUpperCase() + data.name.slice(1)
      }`,
      html: `
        <h2>New Bid Request</h2>
        <p><strong>Name:</strong> ${
          data.name.charAt(0).toUpperCase() + data.name.slice(1)
        }</p>
        <p><strong>Email:</strong> ${data.email.toLowerCase()}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Preferred Contact Method:</strong> ${
          data.contactPreference.charAt(0).toUpperCase() +
          data.contactPreference.slice(1)
        }</p>
        <p><strong>Project Scope:</strong> ${
          data.scope.charAt(0).toUpperCase() + data.scope.slice(1)
        }</p>
        <p><strong>Project Type:</strong> ${
          data.projectType.charAt(0).toUpperCase() + data.projectType.slice(1)
        }</p>
        <p><strong>Project Description:</strong> ${
          data.projectDescription.charAt(0).toUpperCase() +
          data.projectDescription.slice(1)
        }</p>
        <p><strong>Desired Timeline:</strong> ${
          data.timeline.charAt(0).toUpperCase() + data.timeline.slice(1)
        }</p>
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
        message: "Request sent successfully!",
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
            : "Failed to submit bid request. Please try again.",
      },
      { status: 500 }
    );
  }
};

export default function RequestBid() {
  const fetcher = useFetcher<ActionResponse>();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactPreference: "email",
    scope: "",
    projectType: "",
    projectDescription: "",
    timeline: "",
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
        contactPreference: "email",
        scope: "",
        projectType: "",
        projectDescription: "",
        timeline: "",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });

    fetcher.submit(formDataToSubmit, {
      method: "post",
      action: "/request-bid",
    });
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
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative py-12"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/7031595/pexels-photo-7031595.jpeg')`,
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Success Notification Pill */}
      <div
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-500 ${
          showSuccess
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-2xl flex items-center text-sm font-medium">
          <svg
            className="w-4 h-4 mr-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          {fetcher.data?.message || "Request Sent Successfully!"}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-3xl mx-auto">
          {/* Frosted glass background */}
          <div className="absolute inset-0 bg-white/40 backdrop-filter backdrop-blur-md backdrop-saturate-150 rounded-xl"></div>
          {/* Additional blur layer */}
          <div className="absolute inset-0 bg-black/10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 rounded-xl"></div>
          {/* Content container */}
          <div className="relative bg-white/20 rounded-xl shadow-2xl p-8 border border-white/40">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Request a Bid
              </h2>
              <p className="mt-4 text-lg text-white">
                Fill out the form below and we'll get back to you with a
                detailed quote for your project.
              </p>
            </div>

            {fetcher.data?.error && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {fetcher.data.error}
              </div>
            )}

            <div className="mt-12">
              <fetcher.Form
                method="post"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
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
                  <label className="block text-sm font-medium text-white mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="email-preference"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference === "email"}
                        onChange={handleChange}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 accent-red-600"
                      />
                      <label
                        htmlFor="email-preference"
                        className="ml-2 text-sm text-white"
                      >
                        Email
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="phone-preference"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference === "phone"}
                        onChange={handleChange}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 accent-red-600"
                      />
                      <label
                        htmlFor="phone-preference"
                        className="ml-2 text-sm text-white"
                      >
                        Phone
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="scope"
                    className="block text-sm font-medium text-white"
                  >
                    Project Type
                  </label>
                  <select
                    name="scope"
                    id="scope"
                    required
                    value={formData.scope}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-white"
                  >
                    Project Scope
                  </label>
                  <select
                    name="projectType"
                    id="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  >
                    <option value="">Select project scope</option>
                    <option value="general-contracting">
                      General Contracting
                    </option>
                    <option value="framing">Framing</option>
                    <option value="concrete">Concrete</option>
                    <option value="door-window-installation">
                      Door & Window Installation
                    </option>
                    <option value="finish-carpentry-trim">
                      Finish Carpentry & Trim
                    </option>
                    <option value="drywall">Drywall</option>
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
                    disabled={fetcher.state !== "idle"}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                      fetcher.state !== "idle"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    }`}
                  >
                    {fetcher.state !== "idle" ? (
                      <div className="flex items-center">
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
                        Submitting...
                      </div>
                    ) : (
                      "Submit Request"
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
