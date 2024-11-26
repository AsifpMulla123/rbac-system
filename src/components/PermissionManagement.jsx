import React, { useState } from "react";

const initialPermissions = [
  { id: 1, name: "Read", description: "Allows reading data" },
  { id: 1, name: "Read", description: "Allows creating and updating data" },
  { id: 1, name: "Read", description: "Allows deleting data" },
];
function PermissionManagement() {
  const [permissions, setPermissions] = useState(initialPermissions);
  const [newPermission, setNewPermission] = useState({
    name: "",
    description: "",
  });
  const handleAddPermission = () => {
    if (newPermission.name && newPermission.description) {
      setPermissions([
        ...permissions,
        { ...newPermission, id: permissions.length + 1 },
        setNewPermission({ name: "", description: "" }),
      ]);
    }
  };
  const handleDeletePermission = (id) => {
    setPermissions(permissions.filter((permission) => permission.id !== id));
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Permission Management
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Add New Permission</h3>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="permission-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Permission Name
            </label>
            <input
              type="text"
              id="permission-name"
              placeholder="Enter Permission Name"
              value={newPermission.name}
              onChange={(e) =>
                setNewPermission({ ...newPermission, name: e.target.value })
              }
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div>
            <label
              htmlFor="permission-description"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              id="permission-description"
              placeholder="Enter Permission Description"
              value={newPermission.description}
              onChange={(e) =>
                setNewPermission({
                  ...newPermission,
                  description: e.target.value,
                })
              }
            />
          </div>
        </div>
        <button
          onClick={handleAddPermission}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Permission
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Permission Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">
                    {permission.name}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">
                    {permission.description}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    onClick={() => handleDeletePermission(permission.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PermissionManagement;
