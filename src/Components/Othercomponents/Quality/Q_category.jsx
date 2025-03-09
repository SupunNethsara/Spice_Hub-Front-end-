import { useState } from "react";
import { Link, Outlet } from "react-router";

const Q_category = () => {
  const [activeTab, setActiveTab] = useState("");

  const tabs = [
    { name: "QUALITY CONTROLLING", path: "" },
    { name: "QUALITY ASSURANCE", path: "quality_A" },

  ];

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-5">

      <div className="border-b border-gray-100 ">
        <ul className="flex flex-wrap">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.path;
            return (
              <li key={index} className="m-1 font-medium text-sm">
                <Link to={tab.path}>
                  <button
                    className={`px-4 py-2  border-b-3  focus:outline-none transition-all duration-300 ${isActive
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

export default Q_category;
