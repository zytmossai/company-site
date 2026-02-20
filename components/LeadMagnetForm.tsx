"use client";

import { useState } from "react";

export function LeadMagnetForm() {
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
    if (!data.name || !data.email) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send checklist");
      }

      setIsSuccess(true);
      e.currentTarget.reset();

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
            Check your email!
          </h3>
          <p className="mt-2 text-sm text-green-800 dark:text-green-200">
            We&apos;ve sent the AI Automation Readiness Framework to your inbox. 
            Don&apos;t forget to check your spam folder if you don&apos;t see it.
          </p>
          <p className="mt-3 text-xs text-green-700 dark:text-green-300">
            Need help? Feel free to reach out to us directly.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="btn-secondary w-full"
        >
          Request Again
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
        <label className="label" htmlFor="email">
          Work Email <span className="text-red-500">*</span>
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
        {isSubmitting ? "Sending..." : "Email Me the Checklist"}
      </button>
      
      <p className="mt-2 text-page-muted text-xs">
        * Required fields. By submitting, you agree to receive occasional emails about AI
        automation. You can unsubscribe at any time.
      </p>
    </form>
  );
}
