import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { buildMeta, jsonLd, breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => {
    const m = buildMeta({
      path: "/terms",
      title: "Terms of Use - Ambesh Tiwari",
      description:
        "Terms of Use for ambeshtiwari.com covering website use, intellectual property, services, payments and limitation of liability under Indian law.",
      keywords: "terms of use, terms and conditions, website terms India, Ambesh Tiwari terms",
    });
    return {
      ...m,
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms of Use", path: "/terms" },
          ]),
        ),
      ],
    };
  },
  component: TermsPage,
});

function TermsPage() {
  const updated = "April 19, 2026";
  return (
    <div className="bg-canvas">
      <section className="container-edit pt-24 pb-12 md:pt-32">
        <Reveal>
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tighter text-ink md:text-6xl">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-ink-muted">Last updated: {updated}</p>
        </Reveal>
      </section>

      <section className="container-edit pb-24">
        <article className="mx-auto max-w-3xl space-y-8 text-[15px] leading-[1.75] text-ink-soft">
          <Intro>
            These Terms of Use ("Terms") govern your access to and use of{" "}
            <a href={SITE_URL} className="underline">ambeshtiwari.com</a>{" "}
            and the related properties ambesh.com, ambesh.in and
            acceleratewithai.in, along with any training, consulting, coaching,
            books, podcasts or related services offered by Ambesh Tiwari through
            BDA Technologies Pvt. Ltd., Delhi (collectively, the "Services"). By
            accessing the website or engaging the Services, you agree to be bound
            by these Terms. These Terms are an electronic contract under the
            Information Technology Act, 2000 and do not require any physical or
            digital signature.
          </Intro>

          <Section title="1. Eligibility">
            <p>
              You must be at least 18 years of age and competent to contract under
              the Indian Contract Act, 1872 to use the Services. By using the
              website, you represent that you meet this requirement.
            </p>
          </Section>

          <Section title="2. Use of the website">
            <p>You agree to use the website only for lawful purposes and to refrain from:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>copying, scraping or republishing content without prior written permission;</li>
              <li>uploading malicious code, attempting to gain unauthorised access or disrupting site operation;</li>
              <li>using the website to transmit unsolicited promotional material; and</li>
              <li>impersonating any person or misrepresenting your affiliation.</li>
            </ul>
          </Section>

          <Section title="3. Intellectual property">
            <p>
              All content on this website, including text, graphics, logos, images,
              videos, course material, frameworks, presentations, the book{" "}
              <em>Accelerate with AI</em> and the podcast <em>The Ambesh Tiwari Show</em>,
              is the intellectual property of Ambesh Tiwari and Ambesh Tiwari
              Consulting and is protected under the Copyright Act, 1957 and the
              Trade Marks Act, 1999. No part may be reproduced, distributed or used
              commercially without prior written consent.
            </p>
          </Section>

          <Section title="4. Services and engagements">
            <p>
              Specific Services (corporate training, workshops, keynotes, consulting,
              coaching) are governed by a separate written proposal, statement of
              work or engagement letter signed between you and Ambesh Tiwari
              Consulting. In case of conflict, the signed engagement document
              prevails over these Terms.
            </p>
          </Section>

          <Section title="5. Fees and payments">
            <p>
              Fees for paid Services are quoted in Indian Rupees (INR) unless
              otherwise stated and are exclusive of applicable taxes (GST). Payment
              terms, milestones and invoicing are specified in the engagement
              document. All payments must be made through the methods notified by
              us. Late payments may attract interest at 1.5% per month or the
              maximum permitted by law, whichever is lower.
            </p>
          </Section>

          <Section title="6. Cancellations and refunds">
            <p>
              Cancellations and refunds are governed by the{" "}
              <a href="/refund" className="underline">Refund Policy</a>{" "}
              available on this website, which forms an integral part of these
              Terms.
            </p>
          </Section>

          <Section title="7. Disclaimer of warranties">
            <p>
              The website and its content are provided on an "as is" and "as
              available" basis. While reasonable efforts are made to keep
              information accurate, no representations or warranties are made,
              express or implied, regarding completeness, reliability or fitness
              for a particular purpose. Training outcomes depend on participant
              engagement and organisational context and cannot be guaranteed.
            </p>
          </Section>

          <Section title="8. Limitation of liability">
            <p>
              To the maximum extent permitted by Indian law, Ambesh Tiwari,
              BDA Technologies Pvt. Ltd. and their associates shall not be liable
              for any indirect, incidental, consequential, special or punitive
              damages arising out of your use of the website or Services.
              Aggregate liability for any direct claim shall not exceed the fees
              paid by you for the specific engagement giving rise to the claim in
              the three months preceding the claim.
            </p>
          </Section>

          <Section title="9. Indemnity">
            <p>
              You agree to indemnify and hold harmless Ambesh Tiwari, Ambesh
              Tiwari Consulting, their employees and associates from any claim,
              loss, liability or expense (including reasonable legal fees) arising
              out of your breach of these Terms or violation of any law.
            </p>
          </Section>

          <Section title="10. Third-party links and tools">
            <p>
              The website may contain links to third-party websites or embedded
              tools (LinkedIn, YouTube, payment gateways, scheduling tools). We
              are not responsible for the content, policies or practices of those
              third parties.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              Access to the website may be suspended or terminated at any time
              without notice if you breach these Terms or engage in conduct that,
              in our reasonable opinion, is harmful to us or other users.
            </p>
          </Section>

          <Section title="12. Modifications">
            <p>
              These Terms may be revised from time to time. The "Last updated" date
              reflects the most recent revision. Continued use of the website after
              changes are posted constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="13. Governing law and dispute resolution">
            <p>
              These Terms are governed by and construed in accordance with the
              laws of India. Any dispute arising out of or in connection with
              these Terms shall first be attempted to be resolved amicably. Failing
              that, disputes shall be referred to arbitration by a sole arbitrator
              under the Arbitration and Conciliation Act, 1996, with the seat and
              venue of arbitration at New Delhi. Subject to arbitration, the
              courts at Delhi shall have exclusive jurisdiction.
            </p>
          </Section>

          <Section title="14. Contact">
            <p>
              Questions about these Terms can be sent to{" "}
              <a href="mailto:hello@ambesh.com" className="underline">hello@ambesh.com</a>.
            </p>
          </Section>
        </article>
      </section>
    </div>
  );
}

function Intro({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-rule bg-elevated p-6 text-[15px] leading-[1.7]">
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
