import { useState } from "react";
import { Link, Outlet } from "react-router";

const AboutCategory = () => {
  const [activeTab, setActiveTab] = useState("");

  const tabs = [
    { name: "Our Vision & Mission", path: "" },
    { name: "History", path: "history" },
    { name: "Chairman Message", path: "cmessage" },
    { name: "Director Board", path: "directorboard" },
    { name: "Distribution", path: "distribution" },
    { name: "Our Values", path: "qa" },
  ];

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4">

      <div className="border-b border-gray-200">
        <ul className="flex flex-wrap justify-center md:justify-center">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.path;
            return (
              <li key={index} className="m-1">
                <Link to={tab.path}>
                  <button
                    className={`px-4 py-2  border-b-4 focus:outline-none transition-all duration-300 ${
                      isActive
                        ? "text-[#8BB500] border-[#8BB500] font-semibold"
                        : "text-gray-600 border-transparent hover:border-[#8BB500] hover:border-border-[#8BB500]"
                    }`}
                    onClick={() => setActiveTab(tab.path)}
                  >
                    {tab.name}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

   
      <div className="p-4 ">
  <Outlet />
</div>

    </div>
  );
};

export default AboutCategory;
