import React, { useState } from "react";

const initialRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
];
function RoleManagement() {
  const [roles, setRoles] = useState(initialRoles);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });
  const handleAddRole = () => {
    if (newRole.name && newRole.permissions.length > 0) {
      setRoles([...roles, { ...newRole, id: roles.length + 1 }]);
      setNewRole({ name: "", permissions: [] });
    }
  };
  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };
  const handlePermissionChange = (permission) => {
    if (newRole.permissions.includes(permission)) {
      setNewRole({
        ...newRole,
        permissions: newRole.permissions.filter((p) => p !== permission),
      });
    } else {
      setNewRole({
        ...newRole,
        permissions: [...newRole.permissions, permission],
      });
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Role Management
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Add New Role</h3>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="role-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Role Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              id="role-name"
              placeholder="Enter role name"
              value={newRole.name}
              onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Permissions
            </label>
            <div className="flex flex-wrap">
              {["Read", "Write", "Delete"].map((permission) => (
                <label
                  key={permission}
                  className="inline-flex items-center mr-6 mb-2"
                >
                  <input
                    type="checkbox"
                    checked={newRole.permissions.includes(permission)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                    onChange={() => handlePermissionChange(permission)}
                  />
                  <span className="ml-2 text-gray-700">{permission}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={handleAddRole}
        >
          Add Role
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Role Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Permissions
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">{role.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">
                    {role.permissions.join(", ")}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteRole(role.id)}
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

export default RoleManagement;
