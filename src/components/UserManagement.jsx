import React, { useState } from "react";
import Modal from "./Modal";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Inactive",
  },
];
function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleAddUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };
  const handleEditUser = (user) => {
    setUsers(users.map((u) => (u.id === user.id ? user : u)));
  };
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          User Management
        </h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setCurrentUser(null);
            setIsModalOpen(true);
          }}
        >
          Add User
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Role
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">{user.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">
                    {user.email}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-nowrap">{user.role}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    className={`relative inline-block px-3 py-1 font-semibold ${
                      user.status === "Active"
                        ? "text-green-900"
                        : "text-red-900"
                    } leading-tight`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-0 ${
                        user.status === "Active" ? "bg-green-200" : "bg-red-200"
                      } opacity-50 rounded-full`}
                    ></span>
                    <span className="relative">{user.status}</span>
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    className="text-blue-600 hover:text-blue-900 mr-2"
                    onClick={() => {
                      setCurrentUser(user);
                      setIsModalOpen(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(user) => {
            if (currentUser) {
              handleEditUser(user);
            } else {
              handleAddUser(user);
            }
            setIsModalOpen(false);
          }}
          user={currentUser}
        />
      )}
    </div>
  );
}

export default UserManagement;
