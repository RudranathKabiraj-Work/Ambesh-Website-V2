import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Calendar, Clock, ShieldCheck, Sparkles, Plus, Minus, Mail, MessageCircle, CheckCircle2, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { buildMeta, jsonLd, breadcrumbSchema, faqSchema, SITE_URL } from "@/lib/seo";
import { whatsappUrl, WA_MESSAGES } from "@/lib/wa";
import { submitLeadToGHL } from "@/lib/ghl";

const faqs = [
  { q: "What happens after submitting the form?", a: "You will get a reply within 24 hours, usually with 2 to 3 calendar slots for a 30-minute discovery call." },
  { q: "Is the discovery call really free?", a: "Yes. The call is free. It is designed to understand your team, not to force a sale." },
  { q: "Do you sign NDAs before the call?", a: "Yes, if your team requires it." },
  { q: "Can we get a custom proposal?", a: "Yes. After the discovery call, a custom proposal can usually be shared within 72 hours." },
];

export const Route = createFileRoute("/contact")({
  head: () => {
    const m = buildMeta({
      path: "/contact",
      title: "Book a Practical AI Workshop - Contact Ambesh Tiwari",
      description:
        "Free 30-minute discovery. No pitch deck. Just a practical diagnosis of where AI fits in your team's workflow and what should happen next. 24-hour response.",
      keywords:
        "book AI training workshop, hire AI trainer India, contact Ambesh Tiwari, corporate AI training booking, AI workflow strategy",
    });
    return {
      ...m,
      scripts: [
        jsonLd({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Ambesh Tiwari",
          url: `${SITE_URL}/contact`,
          mainEntity: {
            "@type": "Person",
            name: "Ambesh Tiwari",
            email: "hello@ambesh.com",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Booking and enquiries",
              email: "hello@ambesh.com",
              telephone: "+91-8929465115",
              areaServed: ["IN", "AE", "TZ"],
              availableLanguage: ["English", "Hindi"],
            },
          },
        }),
        jsonLd(faqSchema(faqs)),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      ],
    };
  },
  component: ContactPage,
});

const stats = [
  { v: "5,000+", l: "Professionals trained" },
  { v: "150+", l: "Sessions and engagements" },
  { v: "9.5", l: "Average NPS score" },
];

type ServiceKey = "diagnostic" | "training" | "strategy" | "automation";
const SERVICE_LABELS: Record<ServiceKey, string> = {
  "diagnostic": "Business Systems Diagnostic",
  training: "AI Training",
  strategy: "Business OS Strategy",
  automation: "AI Implementation",
};

function readQuery() {
  if (typeof window === "undefined") return { service: "", type: "" };
  const params = new URLSearchParams(window.location.search);
  return {
    service: params.get("service") || "",
    type: params.get("type") || "",
  };
}

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [service, setService] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const q = readQuery();
    setService(q.service);
    setType(q.type);
  }, []);

  const serviceLabel = (service as ServiceKey) in SERVICE_LABELS ? SERVICE_LABELS[service as ServiceKey] : "";
  const isPodcast = type === "podcast";

  const waMessage = isPodcast
    ? WA_MESSAGES.podcast
    : service === "diagnostic"
      ? WA_MESSAGES.diagnostic
      : service === "training"
        ? WA_MESSAGES.training
        : service === "strategy"
          ? WA_MESSAGES.strategy
          : service === "automation"
            ? WA_MESSAGES.automation
            : WA_MESSAGES.contact;


  const submitLeadFn = useServerFn(submitLeadToGHL);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const designation = String(data.get("designation") || "");
    const teamSize = String(data.get("teamSize") || "");
    const format = String(data.get("format") || "");
    const timeline = String(data.get("timeline") || "");
    const challenge = String(data.get("challenge") || "");

    try {
      await submitLeadFn({
        data: {
          name,
          email,
          company,
          designation,
          teamSize,
          format,
          timeline,
          challenge,
          serviceLabel: isPodcast ? "Podcast guest pitch" : serviceLabel,
          pageUrl: window.location.href,
        },
      });
    } catch (error) {
      console.error("GHL sync failed:", error);
    }

    form.reset();
    setShowSuccessModal(true);
    setSubmitting(false);
  }

  const heroHeading = isPodcast
    ? (
      <>
        Pitch a conversation{" "}
        <span className="text-gradient-brand animate-gradient">for the podcast.</span>
      </>
    )
    : service === "diagnostic"
      ? (
        <>
          Let's diagnose{" "}
          <span className="text-gradient-brand animate-gradient">your business.</span>
        </>
      )
      : (
        <>
          Let's build the system{" "}
          <span className="text-gradient-brand animate-gradient">your business needs.</span>
        </>
      );
  const heroSub = isPodcast
    ? "Tell us about you, the story, and why now. If it is a fit, we will set up a recording."
    : "Free 30-minute Business Systems Diagnostic. No pitch deck. A practical diagnosis of where the business is stuck and what the next 90 days should focus on.";

  return (
    <>
      {/* HERO */}
      <section className="premium-canvas relative isolate overflow-hidden">
        <div className="absolute inset-0 tex-dots-soft tex-fade opacity-70" aria-hidden />
        <div className="container-edit relative pt-12 pb-16 md:pt-16 md:pb-20">
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-5xl font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              {heroHeading}
            </h1>
          </Reveal>
          {serviceLabel && (
            <Reveal delay={150}>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-rule bg-canvas px-4 py-1.5 text-xs font-semibold text-ink">
                Inquiry for {serviceLabel}
              </p>
            </Reveal>
          )}
          <Reveal delay={250}>
            <p className="mt-8 max-w-2xl text-lg text-ink-soft md:text-xl">{heroSub}</p>
          </Reveal>
          <Reveal delay={350}>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> 24-hour response</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> NDA on request</span>
              <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> Custom proposal in 72 hours</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="relative bg-canvas">
        <div className="absolute inset-0 tex-grid-fine opacity-60" aria-hidden />
        <div className="container-edit relative pb-28 -mt-6 md:-mt-12">
          <div className="grid gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <form
                onSubmit={onSubmit}
                className="rounded-3xl border border-rule bg-canvas p-6 shadow-lift md:p-10"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand-soft border border-rule">
                    <Mail className="h-4 w-4 text-accent" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold tracking-tight">Tell us about your team</h2>
                    <p className="text-sm text-ink-muted">The more honest, the more useful the call.</p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Company" name="company" required />
                  <Field label="Designation" name="designation" required />
                  <SelectField label="Team size" name="teamSize" options={["1 to 10", "10 to 50", "50 to 200", "200 to 1,000", "1,000+"]} />
                  <SelectField label="Preferred format" name="format" options={["Keynote", "Workshop (half-day to multi-day)", "Strategy sprint", "Implementation build", "Not sure yet"]} />
                  <SelectField label="Timeline" name="timeline" options={["This month", "Next 60 days", "Next quarter", "Exploring"]} />
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-muted font-mono-label">
                    Where is your team losing the most time right now?
                  </label>
                  <textarea
                    name="challenge"
                    rows={5}
                    required
                    placeholder="Reporting, follow-ups, research, documentation, content, internal coordination, decision-making, or something else."
                    className="w-full rounded-xl border border-rule bg-canvas px-4 py-3 text-base transition-all focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-premium group mt-8 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full text-base font-semibold disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send inquiry"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>

                <p className="mt-4 text-center text-xs text-ink-muted">
                  We respond within 24 hours. NDA available on request.
                </p>
              </form>
            </Reveal>

            <Reveal delay={150} className="md:col-span-5">
              <div className="sticky top-28 space-y-5">
                <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-canvas shadow-lift">
                  <div className="absolute inset-0 opacity-30 bg-gradient-brand" aria-hidden />
                  <div className="relative">
                    <Sparkles className="h-6 w-6 text-canvas/90" />
                    <h3 className="mt-4 text-2xl font-extrabold tracking-tight">Why teams pick Ambesh</h3>
                    <ul className="mt-6 space-y-4">
                      {stats.map((x) => (
                        <li key={x.l} className="flex items-baseline justify-between border-b border-canvas/10 pb-3 last:border-0">
                          <span className="text-sm text-canvas/70">{x.l}</span>
                          <span className="text-2xl font-extrabold tracking-tighter text-canvas">{x.v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-3xl border border-rule bg-canvas p-7 shadow-soft">
                  <p className="eyebrow">Trust signals</p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight">What you can expect</h3>
                  <ul className="mt-5 space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span><span className="font-semibold">24-hour response</span>, including weekends.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span><span className="font-semibold">NDA available</span> on request, before the first call.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span><span className="font-semibold">Custom proposal</span> in 72 hours after discovery.</span>
                    </li>
                  </ul>
                  <a
                    href={whatsappUrl(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Prefer WhatsApp? Message Ambesh
                  </a>
                  <a
                    href="mailto:hello@ambesh.com"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-rule bg-sand px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/40 hover:bg-sand-deep"
                  >
                    <Mail className="h-4 w-4" />
                    Or email hello@ambesh.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-sand py-16">
        <div className="absolute inset-0 tex-diagonal opacity-80" aria-hidden />
        <div className="container-edit relative grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-5xl">
              Quick <span className="text-gradient-brand">answers.</span>
            </h2>
            <p className="mt-5 text-base text-ink-muted">
              Still have questions? Email{" "}
              <a href="mailto:hello@ambesh.com" className="font-semibold text-ink underline-offset-4 hover:underline">
                hello@ambesh.com
              </a>
              .
            </p>
          </Reveal>
          <div className="md:col-span-8">
            <ul className="divide-y divide-rule border-y border-rule">
              {faqs.map((f, i) => (
                <li key={f.q}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-accent"
                  >
                    <span className="text-lg font-semibold md:text-xl">{f.q}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-rule bg-canvas">
                      {openFaq === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="pb-6 pr-12">
                      <p className="text-base text-ink-muted">{f.a}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link to="/" className="text-sm text-ink-muted hover:text-ink">Back to home</Link>
            </div>
          </div>
        </div>
      </section>

      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border border-rule bg-canvas p-8 text-center shadow-lift"
          >
            <button
              onClick={() => setShowSuccessModal(false)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition hover:bg-sand hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand-soft">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold tracking-tight">Inquiry sent!</h3>
            <p className="mt-3 text-base text-ink-muted">
              ✅ Thank you! Your inquiry has been submitted successfully. We'll get in touch with you shortly.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <a
                href={whatsappUrl(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                Message on WhatsApp
              </a>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="text-sm font-semibold text-ink-muted transition hover:text-ink"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Field({ label, name, required, type = "text" }: { label: string; name: string; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-muted font-mono-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="h-12 w-full rounded-xl border border-rule bg-canvas px-4 text-base transition-all focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-ink-muted font-mono-label">
        {label}
      </label>
      <select
        name={name}
        required
        className="h-12 w-full rounded-xl border border-rule bg-canvas px-4 text-base transition-all focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15"
      >
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
