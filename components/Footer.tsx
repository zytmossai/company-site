import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/90 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 sm:px-8 sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
              ZytmossAI
            </p>
            <p className="mx-auto mt-1 max-w-md text-xs text-slate-600 sm:mx-0 dark:text-slate-500">
              We help SMEs, e‑commerce brands, agencies, and startups automate
              repetitive work with AI and reduce operational costs by up to 40%.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-xs text-slate-600 sm:items-end dark:text-slate-400">
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-900 dark:hover:text-slate-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-900 dark:hover:text-slate-200">
                Terms of Service
              </Link>
            </div>
            <span>© {new Date().getFullYear()} ZytmossAI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

