import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import React from "react";
import styles from "./styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-black">
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-2xl font-bold text-black">
                    Grit Construction
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="/"
                    className="text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600"
                  >
                    Home
                  </a>
                  <a
                    href="/services"
                    className="text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600"
                  >
                    Services
                  </a>
                  <a
                    href="/request-bid"
                    className="text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600"
                  >
                    Request a Bid
                  </a>
                  <a
                    href="/contact"
                    className="text-black inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-red-600"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-black">
              © {new Date().getFullYear()} Grit Construction. All rights
              reserved.
            </p>
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
