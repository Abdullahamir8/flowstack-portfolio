import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full Stack Web Development",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Something went wrong.");
        return;
      }

      setStatus(data.message);

      setFormData({
        name: "",
        email: "",
        service: "Full Stack Web Development",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Unable to connect to backend server.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        <div>
          <p className="text-cyan-400 font-medium mb-3">Contact</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s build your next web application
          </h2>

          <p className="text-slate-300 mb-6">
            Need a full stack web application, backend API, frontend development,
            or database-driven web solution? Send me a message.
          </p>

          <div className="space-y-3 text-slate-300">
            <p>
              <span className="text-white font-semibold">Email:</span> abd08amir@gmail.com
            </p>

            <p>
              <span className="text-white font-semibold">Services:</span> MERN Development, Backend APIs, React Applications
            </p>

            <p>
              <span className="text-white font-semibold">Availability:</span> Open for freelance & junior developer roles
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3"
          >
            <option>Full Stack Web Development</option>
            <option>React Frontend Development</option>
            <option>Backend API Development</option>
            <option>MongoDB Database Integration</option>
          </select>

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 resize-none"
          ></textarea>

          {status && <p className="text-sm text-cyan-400">{status}</p>}

          <button
            type="submit"
            className="w-full bg-cyan-400 text-slate-950 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;