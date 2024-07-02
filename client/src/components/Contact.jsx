import React, { useState } from "react";

function Contact() {
  const [inputvalue, setInputvalue] = useState({
    email: "",
    first_name: "",
    last_name: "",
    mobile: "",
    message: "",
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };

  const sentUserdata = async (e) => {
    e.preventDefault();
    const { email, first_name, last_name, mobile, messages } = inputvalue;

    if (first_name == "") {
      alert("First Name is required");
    } else if (last_name == "") {
      alert("Last Name is required");
    } else if (email == "") {
      alert("Email is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (mobile == "") {
      alert("Mobile Number is required");
    } else {
      alert("Form submitted successfully");
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name,
          last_name,
          mobile,
          messages,
        }),
      });
      const data = res.json();
      console.log(data);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <h2 className="text-3xl p-3">Contact Me</h2>
      </div>
      <div>
        <form class="max-w-md mx-auto">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-b-2 rounded-md"
              onChange={getvalue}
              placeholder="Email"
              required
              value={inputvalue.email}
            />
            <label>Email address</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-b-2 rounded-md"
              onChange={getvalue}
              placeholder="First Name"
              required
              value={inputvalue.first_name}
            />
            <label>First name</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-b-2 rounded-md"
              onChange={getvalue}
              placeholder="Last name"
              required
              value={inputvalue.last_name}
            />
            <label>Last name</label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="mobile"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-b-2 rounded-md"
              onChange={getvalue}
              placeholder="Phone Number"
              required
              value={inputvalue.mobile}
            />
            <label>Phone number</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <textarea
              name="message"
              class="resize block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-b-2 rounded-md"
              onChange={getvalue}
              placeholder="Message"
              required
              value={inputvalue.message}
            ></textarea>{" "}
            <label>Message</label>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={sentUserdata}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
