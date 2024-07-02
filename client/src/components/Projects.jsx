import React from "react";
import ProjectData from "./data";
import projectData from "./data";

function Projects() {
  return (
    <>
      <div className="flex items-center justify-center">
        <h2 className="text-3xl p-3">Projects</h2>
      </div>
      
      <div className="flex flex-wrap justify-center">
        {projectData.map((el, index) => {
          return (
            <>
              <div className="flex items-center p-1">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img class="rounded-t-lg" src={el.imgsrc} alt="" />

                  <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {el.projectName}
                    </h5>

                    <a
                      href={el.demo}
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      target="_blank"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
