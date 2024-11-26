import React from "react";

function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "users", label: "Users" },
    { id: "roles", label: "Roles" },
    { id: "permissions", label: "Permissions" },
  ];
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform  -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`block py-2.5 px-4 mb-2 rounded transition duration-200 ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
