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
    { name: "Request Bid", href: "/request-bid" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Header */}
          <div className="hidden sm:flex sm:justify-between sm:h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                GRIT
              </Link>
            </div>
            <div className="ml-6 flex space-x-8">
              {navigation.map((item) => {
                const isActive =
                  (item.href === "/" && location.pathname === "/") ||
                  (item.href !== "/" &&
                    location.pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
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

          {/* Mobile Header */}
          <div className="flex justify-between h-16 sm:hidden">
            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                GRIT
              </Link>
            </div>

            {/* Empty div for mobile layout balance */}
            <div className="flex-1"></div>
          </div>

          {/* Mobile menu dropdown */}
          <div className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActive =
                  (item.href === "/" && location.pathname === "/") ||
                  (item.href !== "/" &&
                    location.pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                      isActive
                        ? "border-red-500 text-red-700 bg-red-50"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
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
