"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="mt-6 max-w-md">
      {/* ================= Direct Contact Info ================= */}
      <div className="mb-5 rounded-md border border-white/10 bg-[#0f0f14] p-4 text-sm text-gray-300">
        <p className="mb-1 text-gray-400">You can also reach me directly:</p>

        <p className="font-medium text-white">
          📞{" "}
          <a
            href="tel:+919068499273"
            className="hover:underline"
          >
            +91 9068499273
          </a>
        </p>
      </div>

      {/* ================= Contact Form ================= */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-md border border-white/10 bg-black p-3 text-sm text-white placeholder-gray-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-md border border-white/10 bg-black p-3 text-sm text-white placeholder-gray-500"
        />

        <textarea
          placeholder="Your Message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-md border border-white/10 bg-black p-3 text-sm text-white placeholder-gray-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-white px-6 py-2 text-sm font-medium text-black transition hover:opacity-80 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* ================= Status Messages ================= */}
      {status === "success" && (
        <div className="mt-4 rounded-md border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-400">
          ✅ Message sent successfully. I’ll get back to you soon.
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
          ❌ Something went wrong. Please try again.
        </div>
      )}
    </div>
  );
}
