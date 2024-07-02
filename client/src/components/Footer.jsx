import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="bg-white dark:bg-gray-900">
        <div class="flex items-center mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow me
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a
                    target="to_blank"
                    href="https://www.linkedin.com/in/ishu-raj/"
                    class="hover:underline "
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="to_blank"
                    href="https://github.com/stunner007-ir"
                    class="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="to_blank"
                    href="https://www.instagram.com/ishu_raj007/"
                    class="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <NavLink to="/" class="hover:underline">
                Ishu Raj
              </NavLink>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
