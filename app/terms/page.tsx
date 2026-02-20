export default function TermsPage() {
  return (
    <div className="section">
      <div className="container-page space-y-10 text-hero-sub text-sm">
        <header className="max-w-2xl">
          <h1 className="section-title">Terms of Service</h1>
          <p className="mt-4 text-page-muted text-xs">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        <div className="max-w-3xl space-y-8">
          <section className="space-y-3">
            <p>
              By using this website, you acknowledge that any information
              provided is for general guidance only and does not constitute
              legal, financial, or professional advice. Engagements for AI
              automation and consulting services are governed by separate written
              agreements.
            </p>
            <p>
              We reserve the right to update or change these terms at any time.
              Your continued use of the site after changes are posted constitutes
              acceptance of the modified terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              1. Definitions
            </h2>
            <p>
              &ldquo;ZytmossAI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo; refers to the company operating this website and
              providing AI automation consulting services. &ldquo;You&rdquo; or
              &ldquo;user&rdquo; refers to any individual or entity accessing or
              using this website. &ldquo;Services&rdquo; refers to the
              consulting, workflow automation, and AI integration offerings
              provided by ZytmossAI.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              2. Use of the Website
            </h2>
            <p>
              You agree to use this website only for lawful purposes and in a
              manner that does not infringe the rights of any third party. You
              must not:
            </p>
            <ul className="space-y-1.5 pl-4">
              <li>
                • Use the site in any way that violates applicable local,
                national, or international laws or regulations.
              </li>
              <li>
                • Attempt to gain unauthorised access to any part of the site or
                its related systems.
              </li>
              <li>
                • Transmit any unsolicited or unauthorised advertising or
                promotional material.
              </li>
              <li>
                • Reproduce, duplicate, copy, or resell any part of this website
                without prior written consent.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              3. Services and Engagements
            </h2>
            <p>
              Information presented on this website is for general informational
              purposes only. Any specific engagement for consulting or automation
              services is subject to a separate written agreement between you and
              ZytmossAI. Submitting a contact or inquiry form does not create a
              binding contract or guarantee the provision of services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              4. Intellectual Property
            </h2>
            <p>
              All content on this website — including text, graphics, logos,
              images, and software — is the property of ZytmossAI or its content
              suppliers and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or create derivative works
              from any content on this site without our express written
              permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              5. Disclaimers
            </h2>
            <p>
              This website and its content are provided on an &ldquo;as
              is&rdquo; and &ldquo;as available&rdquo; basis without any
              warranties of any kind, either express or implied. We do not
              warrant that the site will be uninterrupted, error-free, or free
              of viruses or other harmful components.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, ZytmossAI shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of your access to or use of (or
              inability to access or use) this website or any content contained
              herein. Our total liability to you for any claim arising from use
              of the website shall not exceed the amount paid by you, if any, for
              accessing the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              7. Third-Party Links
            </h2>
            <p>
              This website may contain links to third-party websites or services
              that are not owned or controlled by ZytmossAI. We have no control
              over and assume no responsibility for the content, privacy policies,
              or practices of any third-party sites. We encourage you to review
              the terms and privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              8. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with
              applicable laws. Any disputes arising in connection with these terms
              shall be subject to the exclusive jurisdiction of the competent
              courts. Please replace this section with the applicable jurisdiction
              as advised by your legal counsel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              9. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. We will
              notify you of any material changes by updating the &ldquo;Last
              updated&rdquo; date at the top of this page. Your continued use of
              the website after changes are posted constitutes your acceptance of
              the updated terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              10. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us via the{" "}
              <a
                href="/contact"
                className="underline underline-offset-2 hover:text-slate-900 dark:hover:text-slate-200"
              >
                Contact page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
