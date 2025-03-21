import React, { useState } from "react";
import { Link, useLocation } from "@remix-run/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const requestBidLink = { name: "Request Bid", href: "/request-bid" };

  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="w-10 flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6 transition-transform duration-300 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                      className="transition-opacity duration-300"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      className="transition-opacity duration-300"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile-only centered logo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden">
              <Link to="/" className="py-3 px-6">
                <img
                  src="/images/Grit_construction_logo-removebg-preview.png"
                  alt="Grit Construction"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Spacer div for mobile to maintain layout */}
            <div className="w-10 md:hidden"></div>

            {/* Desktop logo and navigation */}
            <div className="hidden md:flex md:flex-1 items-center">
              <Link to="/" className="py-3 px-6">
                <img
                  src="/images/Grit_construction_logo-removebg-preview.png"
                  alt="Grit Construction"
                  className="h-12 w-auto"
                />
              </Link>

              <div className="ml-16 flex">
                {navigation.map((item) => {
                  const isActive =
                    (item.href === "/" && location.pathname === "/") ||
                    (item.href !== "/" &&
                      location.pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`inline-flex items-center px-4 pt-1 border-b-2 text-sm font-medium mx-6 ${
                        isActive
                          ? "border-red-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Request Bid Button */}
            <div className="hidden md:flex items-center">
              <Link
                to={requestBidLink.href}
                className={`inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors ${
                  location.pathname.startsWith(requestBidLink.href)
                    ? "bg-red-700"
                    : ""
                }`}
              >
                {requestBidLink.name}
              </Link>
            </div>
          </div>

          {/* Mobile menu drawer */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:hidden border-t border-gray-200`}
          >
            <div className="pt-2 pb-3 space-y-1">
              {[...navigation, requestBidLink].map((item) => {
                const isActive =
                  (item.href === "/" && location.pathname === "/") ||
                  (item.href !== "/" &&
                    location.pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block pl-3 pr-4 py-2 text-base font-medium ${
                      isActive
                        ? "bg-red-50 border-l-4 border-red-500 text-red-700"
                        : "border-l-4 border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
}
