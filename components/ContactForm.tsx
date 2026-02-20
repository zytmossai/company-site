"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic client-side validation
    if (!data.name || !data.email || !data.challenge) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send inquiry");
      }

      setIsSuccess(true);
      e.currentTarget.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="card-surface space-y-4">
        <div className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">
            Thank you for your inquiry!
          </h3>
          <p className="mt-2 text-sm text-green-800 dark:text-green-200">
            We&apos;ve received your message and will contact you within 24 hours to schedule your strategy session.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="btn-secondary w-full"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="card-surface space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="label" htmlFor="name">
          Name <span className="text-red-500">*</span>
        </label>
        <input 
          id="name" 
          name="name" 
          className="input" 
          required 
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label className="label" htmlFor="company">
          Company
        </label>
        <input 
          id="company" 
          name="company" 
          className="input" 
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label className="label" htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input 
          id="email" 
          name="email" 
          type="email" 
          className="input" 
          required 
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label className="label" htmlFor="industry">
          Industry
        </label>
        <input 
          id="industry" 
          name="industry" 
          className="input" 
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label className="label" htmlFor="companySize">
          Company Size
        </label>
        <select 
          id="companySize" 
          name="companySize" 
          className="input"
          disabled={isSubmitting}
        >
          <option value="">Select...</option>
          <option value="1-10">1–10</option>
          <option value="11-50">11–50</option>
          <option value="51-200">51–200</option>
          <option value="201-1000">201–1,000</option>
          <option value="1000+">1,000+</option>
        </select>
      </div>
      <div>
        <label className="label" htmlFor="challenge">
          Current Challenge <span className="text-red-500">*</span>
        </label>
        <textarea 
          id="challenge" 
          name="challenge" 
          rows={3} 
          className="input" 
          required 
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label className="label" htmlFor="budget">
          Budget Range
        </label>
        <select 
          id="budget" 
          name="budget" 
          className="input"
          disabled={isSubmitting}
        >
          <option value="">Select...</option>
          <option value="under-5k">Under $5k</option>
          <option value="5k-15k">$5k–$15k</option>
          <option value="15k-50k">$15k–$50k</option>
          <option value="50k-plus">$50k+</option>
        </select>
      </div>
      <div>
        <label className="label" htmlFor="timeline">
          Preferred Start Timeline
        </label>
        <select 
          id="timeline" 
          name="timeline" 
          className="input"
          disabled={isSubmitting}
        >
          <option value="">Select...</option>
          <option value="immediately">Immediately</option>
          <option value="30-days">Within 30 days</option>
          <option value="60-days">Within 60 days</option>
          <option value="90-plus">90+ days</option>
        </select>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      <button 
        type="submit" 
        className="btn-primary w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
      </button>
      
      <p className="mt-2 text-page-muted text-xs">
        * Required fields. After submission, our team will contact you within 24 hours to schedule your strategy session.
      </p>
    </form>
  );
}
