import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-md mx-auto bg-gray-800 rounded-md overflow-hidden shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
        <div className="mb-4">
          <label className="block text-white-600 text-sm font-semibold mb-2">
            Name:
          </label>
          <p className="text-white-800">Sunil Bikram Karki</p>
        </div>
        <div className="mb-4">
          <label className="block text-white-600 text-sm font-semibold mb-2">
            Email:
          </label>
          <p className="text-white-500">sunilkarki2018@gmail.com</p>
        </div>
        <div className="mb-4">
          <label className="block text-white-600 text-sm font-semibold mb-2">
            Phone:
          </label>
          <p className="text-white-800">+358 0449787228</p>
        </div>
      </div>
    </section>
  );
}
