"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setIsSubmitting(false);

      if (result.success) {
        toast.success("✅ Message sent successfully!");
        form.reset();
      } else {
        toast.error("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      toast.error("⚠️ Something went wrong. Try again later.");
    }
  };

  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-transparent via-slate-900 to-transparent text-white overflow-hidden">
      {/* Toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Let’s Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-slate-300 text-lg"
        >
          Have a question or want to collaborate? Send me a message and I’ll get
          back to you soon.
        </motion.p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl relative z-10 space-y-6"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-300 mb-1"
          >
            Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your full name"
              className="w-full bg-transparent border border-white/20 rounded-md pl-10 pr-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-300 mb-1"
          >
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full bg-transparent border border-white/20 rounded-md pl-10 pr-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-300 mb-1"
          >
            Message
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-slate-400 w-4 h-4" />
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Write your message..."
              className="w-full bg-transparent border border-white/20 rounded-md pl-10 pr-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
        </div>

        {/* Submit button */}
        <Button
          variant="gradient"
          disabled={isSubmitting}
          type="submit"
          className="w-full py-4"
        >
          {isSubmitting ? (
            <>
              <motion.div
                className="flex gap-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                transition={{ repeat: Infinity }}
              />
              Sending...
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4" /> Send Message
            </div>
          )}
        </Button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
