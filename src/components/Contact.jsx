import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCallOptions, setShowCallOptions] = useState(false);

  const phoneNumber = "+919152754549"; // Your number with country code

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/movlylpg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

  const openWhatsApp = () => {
    const waUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;
    window.open(waUrl, "_blank");
    setShowCallOptions(false);
  };

  const openDialer = () => {
    window.location.href = `tel:${phoneNumber}`;
    setShowCallOptions(false);
  };

  const handleCallClick = () => {
    if (isMobile()) {
      setShowCallOptions(true);
    } else {
      openWhatsApp();
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 "
    >
      <h2 className="text-5xl font-bold text-white mb-3">Contact Me</h2>
      <p className="uppercase tracking-widest text-gray-400 mb-10">
        Let’s Build Something Together
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-[#111] w-full max-w-lg p-8 rounded-2xl shadow-lg border border-gray-800"
      >
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="mt-4 text-green-500 font-semibold">
            Thanks for reaching out! I’ve received your message and will get
            back to you soon. 🙌
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-500 font-semibold">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </form>

      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
        <a
          href="https://www.linkedin.com/in/sahil-mulla-625364263/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-xl"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sahilmulla16"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white transition-colors text-xl"
        >
          GitHub
        </a>
        <a
          href="mailto:sahilmulla9152@gmail.com"
          className="text-gray-400 hover:text-white transition-colors text-xl"
        >
          Email
        </a>


        {/* this function is removed because it is not an necessary as of now  */}
        {/* <button
          onClick={handleCallClick}
          className="text-gray-400 hover:text-white transition-colors text-xl bg-gray-900 px-6 py-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="button"
          aria-label="Call or WhatsApp Sahil Mulla"
        >
          📞 Call
        </button> */}
      </div>

      {/* Call options modal */}
      {/* {showCallOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#111] p-6 rounded-xl max-w-xs w-full text-center space-y-5">
            <h3 className="text-white text-lg font-semibold">Choose how to call</h3>
            <button
              onClick={openWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition"
            >
              WhatsApp
            </button>
            <button
              onClick={openDialer}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition"
            >
              Phone Dialer
            </button>
            <button
              onClick={() => setShowCallOptions(false)}
              className="mt-3 text-gray-400 hover:text-white transition underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )} */}
    </section>
  );
}
