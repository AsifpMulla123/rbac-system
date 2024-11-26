import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";

function App() {
  const [activeTab, setActiveTab] = useState("users");
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            RBAC Admin Dashboard
          </h1>
          {activeTab === "users" && <UserManagement />}
          {activeTab === "roles" && <RoleManagement />}
          {activeTab === "permissions" && <PermissionManagement />}
        </div>
      </div>
    </div>
  );
}

export default App;
