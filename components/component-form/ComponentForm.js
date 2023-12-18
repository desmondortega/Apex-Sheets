"use client";
import { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          businessName,
          businessType,
          website,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setBusinessName("");
        setBusinessType("");
        setWebsite("");
        setMessage("");
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log("Err", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sm:w-4/5 w-5/5">
      <div className="border shadow-2xl rounded-xl px-8 py-12 bg-white flex flex-col space-y-6">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="sm:text-md text-sm">
              First Name <span className="text-red-700">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full border-b border-black focus:outline-none mt-3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="sm:text-md text-sm">
              Last Name <span className="text-red-700">*</span>
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full border-b border-black focus:outline-none mt-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sm:text-md text-sm">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="w-full border-b border-black focus:outline-none mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="businessName" className="sm:text-md text-sm">
              Business Name <span className="text-red-700">*</span>
            </label>
            <input
              id="businessName"
              type="text"
              className="w-full border-b border-black focus:outline-none mt-3"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="businessType" className="sm:text-md text-sm">
              Business Type <span className="text-red-700">*</span>
            </label>
            <input
              id="businessType"
              type="text"
              className="w-full border-b border-black focus:outline-none mt-3"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="website" className="sm:text-md text-sm">
            Website
          </label>
          <input
            id="website"
            type="text"
            placeholder="https://"
            className="w-full border-b border-black focus:outline-none mt-3 mb-3"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="message" className="sm:text-md text-sm">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border-b border-black focus:outline-none mt-3 mb-3 text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="3"
          />
        </div>

        <div className="flex justify-center items-center">
          <button
            type="submit"
            className={`text-gray-100 bg-apex-green py-2 px-10 rounded sm:text-md text-sm`}
          >
            Get Started
          </button>
        </div>

        {status === "success" && (
          <p className="text-apex-green text-center">
            Email sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-700 text-center">
            Failed to send message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
