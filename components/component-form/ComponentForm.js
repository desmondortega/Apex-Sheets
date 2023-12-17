"use client";
import { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [website, setWebsite] = useState("");

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
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (err) {
      console.log("Err", err);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setBusinessName("");
    setBusinessType("");
    setWebsite("");
  };

  return (
    <form onSubmit={handleSubmit} className="sm:w-4/5 w-5/5">
      <div className="border shadow-2xl rounded-xl px-8 py-12 bg-white flex flex-col space-y-6">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="sm:text-md text-sm">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full border-b border-black focus:outline-none mt-3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="sm:text-md text-sm">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full border-b border-black focus:outline-none mt-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sm:text-md text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border-b border-black focus:outline-none mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="businessName" className="sm:text-md text-sm">
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              className="w-full border-b border-black focus:outline-none mt-3"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="businessType" className="sm:text-md text-sm">
              Business Type
            </label>
            <input
              id="businessType"
              type="text"
              className="w-full border-b border-black focus:outline-none mt-3"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
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
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className={`text-gray-100 bg-apex-green py-2 px-10 rounded sm:text-md text-sm`}
          >
            Get Started
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
