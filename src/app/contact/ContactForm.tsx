"use client";

import { useId, useState, type FormEvent } from "react";
import { cx } from "@/components/ui";
import { Icon } from "@/components/icons";

const fieldClasses =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-deep-navy placeholder:text-steel-gray/70 transition focus:border-nadi-blue focus:outline-none focus:ring-2 focus:ring-nadi-blue/30";

const labelClasses = "block text-sm font-medium text-deep-navy";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const baseId = useId();

  const nameId = `${baseId}-name`;
  const emailId = `${baseId}-email`;
  const companyId = `${baseId}-company`;
  const messageId = `${baseId}-message`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Front-end demo only: no backend submission.
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center rounded-2xl border border-nadi-blue/20 bg-nadi-blue/5 px-6 py-12 text-center"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-nadi-blue/10 text-nadi-blue">
          <Icon name="check" className="h-7 w-7" strokeWidth={2} />
        </span>
        <h3 className="mt-5 font-display text-xl font-semibold text-deep-navy">
          Message received
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Thanks — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor={nameId} className={labelClasses}>
          Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your full name"
          className={cx("mt-2", fieldClasses)}
        />
      </div>

      <div>
        <label htmlFor={emailId} className={labelClasses}>
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@organization.com"
          className={cx("mt-2", fieldClasses)}
        />
      </div>

      <div>
        <label htmlFor={companyId} className={labelClasses}>
          Company{" "}
          <span className="font-normal text-steel-gray">(optional)</span>
        </label>
        <input
          id={companyId}
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Organization or agency"
          className={cx("mt-2", fieldClasses)}
        />
      </div>

      <div>
        <label htmlFor={messageId} className={labelClasses}>
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={5}
          placeholder="Tell us about the operations you want to modernize."
          className={cx("mt-2 resize-y", fieldClasses)}
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-nadi-blue px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-nadi-blue/30 transition duration-200 hover:bg-nadi-blue-strong hover:shadow-md hover:shadow-nadi-blue/30 focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
      >
        Send message
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </button>
    </form>
  );
}
