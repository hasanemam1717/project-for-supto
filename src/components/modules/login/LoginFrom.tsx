/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Link from "next/link";

type FormData = {
  username: string;
  email: string;
  password: string;
};

export default function LoginFrom() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };

  return (
    <div className=" flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg  ">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          You have not no account{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
