import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact">
      
    <div className="max-w-md mx-auto bg-gray-800 rounded-md overflow-hidden shadow-md p-6">
    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
    <div className="mb-4">
      <label className="block text-white-600 text-sm font-semibold mb-2">Name:</label>
      <p className="text-white-800">Sunil Bikram Karki</p>
    </div>
    <div className="mb-4">
      <label className="block text-white-600 text-sm font-semibold mb-2">Email:</label>
      <p className="text-white-500">sunilkarki2018@gmail.com</p>
    </div>
    <div className="mb-4">
      <label className="block text-white-600 text-sm font-semibold mb-2">Phone:</label>
      <p className="text-white-800">+358 0449787228</p>
    </div>
  </div>
  
  </section>);
}