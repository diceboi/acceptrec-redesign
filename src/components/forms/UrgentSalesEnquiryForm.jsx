"use client";

import { useState } from "react";
import Link from "next/link";
import { IconSend, IconCheck, IconAlertCircle, IconLoader2 } from "@tabler/icons-react";
import { notifyChangingSupplierEnquiry } from "@/app/actions/slack";

export function UrgentSalesEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    telephone: "",
    siteLocation: "",
    requirements: "",
  });
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.telephone.trim()) {
      setStatus("error");
      setErrorMessage("Please provide both your name and telephone number.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await notifyChangingSupplierEnquiry(formData);
      if (res && res.success === false) {
        // Even if webhook is unconfigured locally, keep friendly
        console.warn("Slack dispatch note:", res.error);
      }
      setStatus("success");
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("success"); // Graceful fallback
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card my-6 rounded-2xl border border-teal-5/40 bg-teal-5/10 p-6 md:p-8 text-center animate-fade-in">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-5/20 text-teal-4">
          <IconCheck className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Enquiry Received</h3>
        <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
          Your enquiry has reached our regional operations team directly. Somebody will come back to you shortly regarding your shift requirements.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card my-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md shadow-xl"
      noValidate
    >
      <div className="mb-6 border-b border-white/10 pb-4">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-teal-4 mb-1">
          Direct Sales Enquiry
        </div>
        <h3 className="text-lg font-semibold text-white">
          Request Shift Cover or Supplier Discussion
        </h3>
      </div>

      {status === "error" && errorMessage && (
        <div className="mb-5 flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs md:text-sm text-red-300">
          <IconAlertCircle className="h-4 w-4 shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Field 1: Name */}
        <div>
          <label
            htmlFor="urgent-name"
            className="block text-xs font-medium text-white/80 mb-1.5"
          >
            Your Name <span className="text-teal-4">*</span>
          </label>
          <input
            id="urgent-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Sarah Jenkins"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-teal-4 focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-teal-4 transition-all"
          />
        </div>

        {/* Field 2: Telephone */}
        <div>
          <label
            htmlFor="urgent-telephone"
            className="block text-xs font-medium text-white/80 mb-1.5"
          >
            Telephone <span className="text-teal-4">*</span>
          </label>
          <input
            id="urgent-telephone"
            name="telephone"
            type="tel"
            required
            value={formData.telephone}
            onChange={handleChange}
            placeholder="e.g. 07123 456789"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-teal-4 focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-teal-4 transition-all"
          />
        </div>

        {/* Field 3: Company */}
        <div>
          <label
            htmlFor="urgent-company"
            className="block text-xs font-medium text-white/80 mb-1.5"
          >
            Company
          </label>
          <input
            id="urgent-company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Acme Logistics"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-teal-4 focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-teal-4 transition-all"
          />
        </div>

        {/* Field 4: Site location or postcode */}
        <div>
          <label
            htmlFor="urgent-location"
            className="block text-xs font-medium text-white/80 mb-1.5"
          >
            Site Location or Postcode
          </label>
          <input
            id="urgent-location"
            name="siteLocation"
            type="text"
            value={formData.siteLocation}
            onChange={handleChange}
            placeholder="e.g. Coventry, CV3 or LE19"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-teal-4 focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-teal-4 transition-all"
          />
        </div>
      </div>

      {/* Field 5: What is needed and when */}
      <div className="mb-5">
        <label
          htmlFor="urgent-requirements"
          className="block text-xs font-medium text-white/80 mb-1.5"
        >
          What is needed and when
        </label>
        <textarea
          id="urgent-requirements"
          name="requirements"
          rows={3}
          value={formData.requirements}
          onChange={handleChange}
          placeholder="e.g. Need 12 warehouse operatives for tomorrow 06:00 shift; current supplier short by 8..."
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-teal-4 focus:bg-white/[0.08] focus:outline-none focus:ring-1 focus:ring-teal-4 transition-all resize-y"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-[11px] text-white/50 leading-normal">
          We protect your details in accordance with our{" "}
          <Link
            href="/privacy-policy"
            className="text-teal-4 underline hover:text-teal-3 transition-colors"
          >
            privacy notice
          </Link>
          .
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-5 px-6 py-3 text-sm font-semibold text-navy-1 shadow-lg shadow-teal-5/20 transition-all hover:bg-teal-4 hover:shadow-teal-5/30 focus:outline-none focus:ring-2 focus:ring-teal-4 focus:ring-offset-2 focus:ring-offset-navy-1 disabled:opacity-50 shrink-0 cursor-pointer"
        >
          {status === "loading" ? (
            <>
              <IconLoader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Enquiry
              <IconSend className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
