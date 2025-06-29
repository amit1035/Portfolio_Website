import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    )
      newErrors.email = "Invalid email address.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mldnayjw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 4000);
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-24 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-6 tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Get In Touch
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-12 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have a project, question, or just want to say hi? Fill out the form below and I’ll get back to you shortly.
        </motion.p>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center gap-2 bg-green-600 py-3 px-6 mb-8 rounded-xl shadow-lg text-white font-semibold text-lg"
          >
            <AiOutlineCheckCircle className="text-2xl" />
            Your message was sent successfully!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10 text-left">
          {/* Floating Label Inputs */}
          {["name", "email"].map((field, i) => (
            <motion.div
              key={field}
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`peer w-full px-5 pt-7 pb-3 bg-white/10 text-white placeholder-transparent rounded-2xl border-2 ${
                  errors[field]
                    ? "border-red-500 focus:ring-red-500"
                    : "border-indigo-600 focus:ring-indigo-400"
                } focus:outline-none focus:ring-2 transition`}
                placeholder={field === "name" ? "Your Name" : "Your Email"}
                autoComplete="off"
              />
              <label
                htmlFor={field}
                className="absolute left-5 top-3 text-sm text-gray-400 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-200 cursor-text select-none"
              >
                {field === "name" ? "Your Name" : "Your Email"}
              </label>
              {errors[field] && (
                <p className="text-red-400 text-sm mt-2 ml-1">{errors[field]}</p>
              )}
            </motion.div>
          ))}

          {/* Textarea */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={`w-full px-5 pt-7 pb-3 bg-white/10 text-white placeholder-gray-400 rounded-2xl border-2 ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-indigo-600 focus:ring-indigo-400"
              } focus:outline-none focus:ring-2 transition resize-none`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-2 ml-1">{errors.message}</p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-3xl text-white font-bold text-lg shadow-lg hover:shadow-indigo-500 transition-transform duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 hover:scale-105"
            >
              {isSubmitting && (
                <BiLoaderAlt className="animate-spin text-2xl" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
