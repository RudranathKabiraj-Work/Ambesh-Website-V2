import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { buildMeta, jsonLd, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/refund")({
  head: () => {
    const m = buildMeta({
      path: "/refund",
      title: "Refund Policy - Ambesh Tiwari",
      description:
        "Refund and cancellation policy for corporate training, workshops, consulting and book purchases offered by Ambesh Tiwari through BDA Technologies Pvt. Ltd., Delhi.",
      keywords: "refund policy, cancellation policy, training refund India, Ambesh Tiwari refund",
    });
    return {
      ...m,
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Refund Policy", path: "/refund" },
          ]),
        ),
      ],
    };
  },
  component: RefundPage,
});

function RefundPage() {
  const updated = "April 19, 2026";
  return (
    <div className="bg-canvas">
      <section className="container-edit pt-24 pb-12 md:pt-32">
        <Reveal eager>
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tighter text-ink md:text-6xl">
            Refund Policy
          </h1>
          <p className="mt-4 text-sm text-ink-muted">Last updated: {updated}</p>
        </Reveal>
      </section>

      <section className="container-edit pb-24">
        <article className="mx-auto max-w-3xl space-y-8 text-[15px] leading-[1.75] text-ink-soft">
          <Intro>
            This Refund Policy applies to payments made to BDA Technologies Pvt. Ltd.,
            Delhi, for corporate training, workshops, keynote sessions, consulting,
            coaching cohorts, the book <em>Accelerate with AI</em> and any other
            paid offering. The policy is designed to be fair to both participants
            and the trainer while accounting for the time-blocked nature of
            training engagements.
          </Intro>

          <Section title="1. Corporate training, workshops and keynotes">
            <p>
              Once an engagement is confirmed in writing and an advance is paid,
              calendar dates are blocked exclusively for the client. Refunds are
              therefore tied to how close the cancellation is to the scheduled
              delivery date:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li><strong>More than 21 days before the session:</strong> 80% refund of advance paid. 20% retained as administrative and opportunity cost.</li>
              <li><strong>Between 8 and 21 days before the session:</strong> 50% refund of advance paid.</li>
              <li><strong>7 days or fewer before the session:</strong> No refund. The client may, at the trainer's discretion, reschedule once within 90 days subject to availability.</li>
            </ul>
            <p>
              All refunds are subject to deduction of payment gateway charges,
              applicable taxes (GST) already remitted and any out-of-pocket
              expenses already incurred (travel, accommodation, printing).
            </p>
          </Section>

          <Section title="2. Consulting and coaching engagements">
            <p>
              Monthly retainers and coaching cohorts are non-refundable for the
              current billing cycle once the cycle has begun. Future cycles can be
              cancelled by giving 30 days' written notice, after which billing
              stops.
            </p>
          </Section>

          <Section title="3. Open / public workshops and cohort programmes">
            <p>
              For open enrolment workshops and cohorts paid for by individuals:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li><strong>Before the cohort starts:</strong> Full refund minus payment gateway charges if requested at least 7 days before the start date.</li>
              <li><strong>After the cohort starts:</strong> No refund, since seats and material have been allocated. A one-time transfer to the next cohort may be granted at the organiser's discretion.</li>
            </ul>
          </Section>

          <Section title="4. Book purchases">
            <p>
              Physical copies of <em>Accelerate with AI</em> can be returned within
              7 days of delivery if received in damaged or defective condition.
              Refunds are processed after the book is received back in original
              condition. Digital and audiobook purchases are non-refundable once
              access has been delivered.
            </p>
          </Section>

          <Section title="5. Cancellation by trainer">
            <p>
              In the rare event that the trainer must cancel a confirmed session
              due to illness, emergency or force majeure, the client will be offered
              either a full refund of fees paid for the cancelled session or a
              rescheduled date at no additional cost, at the client's option.
            </p>
          </Section>

          <Section title="6. How to request a refund">
            <p>
              Refund requests must be sent in writing to{" "}
              <a href="mailto:hello@ambesh.com" className="underline">hello@ambesh.com</a>{" "}
              with the invoice number, payment proof and reason for the request.
              Approved refunds are processed within 7 to 14 working days to the
              original payment method.
            </p>
          </Section>

          <Section title="7. Chargebacks">
            <p>
              Initiating a chargeback through your bank or card issuer without
              first attempting to resolve the matter through the contact channel
              above will be treated as a breach of these terms and may result in
              suspension of access to all current and future Services.
            </p>
          </Section>

          <Section title="8. Force majeure">
            <p>
              Neither party shall be liable for any failure or delay in performance
              caused by events beyond reasonable control, including natural
              disasters, pandemics, government action, strikes or telecom outages.
              In such cases the parties will work together in good faith to
              reschedule.
            </p>
          </Section>

          <Section title="9. Governing law">
            <p>
              This Refund Policy is governed by the laws of India and forms part of
              the <a href="/terms" className="underline">Terms of Use</a>. All
              disputes are subject to the exclusive jurisdiction of the courts at
              Delhi, India.
            </p>
          </Section>
        </article>
      </section>
    </div>
  );
}

function Intro({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl custom-theme-card-static p-6 text-[15px] leading-[1.7]">
      {children}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-display text-xl font-bold tracking-tight text-ink md:text-2xl">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
