import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { buildMeta, jsonLd, breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => {
    const m = buildMeta({
      path: "/privacy",
      title: "Privacy Policy - Ambesh Tiwari",
      description:
        "Privacy Policy for ambeshtiwari.com explaining what data is collected, how it is used, stored and protected under Indian law (DPDP Act, 2023).",
      keywords: "privacy policy, data protection, DPDP Act India, Ambesh Tiwari privacy",
    });
    return {
      ...m,
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
        ),
      ],
    };
  },
  component: PrivacyPage,
});

function PrivacyPage() {
  const updated = "April 19, 2026";
  return (
    <div className="bg-canvas">
      <section className="container-edit pt-24 pb-12 md:pt-32">
        <Reveal>
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tighter text-ink md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-ink-muted">Last updated: {updated}</p>
        </Reveal>
      </section>

      <section className="container-edit pb-24">
        <article className="prose-legal mx-auto max-w-3xl space-y-8 text-[15px] leading-[1.75] text-ink-soft">
          <LegalIntro>
            This Privacy Policy explains how BDA Technologies Pvt. Ltd. ("we", "us",
            "our"), based in Delhi, India, collects, uses, stores and protects your
            personal information when you visit{" "}
            <a href={SITE_URL} className="underline">ambeshtiwari.com</a>{" "}
            and the related properties{" "}
            <a href="https://ambesh.com" className="underline">ambesh.com</a>,{" "}
            <a href="https://ambesh.in" className="underline">ambesh.in</a> and{" "}
            <a href="https://acceleratewithai.in" className="underline">acceleratewithai.in</a>,{" "}
            or engage with services offered through these websites. This policy is
            governed by the laws of India, including the Digital Personal Data
            Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000.
          </LegalIntro>

          <Section title="1. Information we collect">
            <p>We collect the following categories of information:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li><strong>Information you provide:</strong> name, email, phone number, company, role and message content submitted through contact, booking or training enquiry forms.</li>
              <li><strong>Automatic information:</strong> IP address, browser type, device type, pages visited, referring URL and timestamps via standard server logs and analytics tools.</li>
              <li><strong>Cookies:</strong> small text files used to remember preferences and measure traffic. You can disable cookies in your browser settings.</li>
            </ul>
          </Section>

          <Section title="2. How we use your information">
            <p>Personal data is used strictly for the purposes for which it was collected, including to:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>respond to enquiries and schedule discovery calls;</li>
              <li>deliver corporate training, consulting and related services;</li>
              <li>send invoices, contracts, course material and post-engagement communication;</li>
              <li>improve website performance and content; and</li>
              <li>comply with applicable legal obligations.</li>
            </ul>
          </Section>

          <Section title="3. Legal basis (DPDP Act, 2023)">
            <p>
              Personal data is processed on the basis of your consent (provided when
              you submit a form or engage our services) or for the performance of a
              contract with you. You may withdraw consent at any time by writing to
              the email address listed in Section 10.
            </p>
          </Section>

          <Section title="4. Sharing and disclosure">
            <p>We do not sell or rent your personal data. Limited sharing happens only with:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>service providers we rely on to operate the website and deliver services (hosting, email, scheduling, payments, analytics);</li>
              <li>professional advisors (legal, accounting) bound by confidentiality; and</li>
              <li>government authorities when required by Indian law or a valid court order.</li>
            </ul>
          </Section>

          <Section title="5. Data storage and security">
            <p>
              Data is stored on secure servers operated by reputable cloud providers.
              Reasonable security practices are followed in line with Rule 8 of the
              Information Technology (Reasonable Security Practices and Procedures and
              Sensitive Personal Data or Information) Rules, 2011. No method of
              transmission over the internet is 100% secure; we cannot guarantee
              absolute security.
            </p>
          </Section>

          <Section title="6. Data retention">
            <p>
              Personal data is retained only as long as necessary to fulfil the
              purpose for which it was collected and to comply with statutory
              retention requirements, after which it is deleted or anonymised.
            </p>
          </Section>

          <Section title="7. Your rights under the DPDP Act">
            <p>You have the right to:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>access the personal data we hold about you;</li>
              <li>request correction or erasure of inaccurate or unnecessary data;</li>
              <li>withdraw consent for future processing; and</li>
              <li>nominate another individual to exercise rights on your behalf in case of incapacity or death.</li>
            </ul>
            <p>Requests can be made to the contact in Section 10 and will be addressed within a reasonable timeframe.</p>
          </Section>

          <Section title="8. Third-party links">
            <p>
              The website may contain links to third-party sites (LinkedIn, YouTube,
              payment gateways, calendar tools). We are not responsible for the
              privacy practices of those sites. Please review their policies
              separately.
            </p>
          </Section>

          <Section title="9. Children">
            <p>
              The services are intended for working professionals and are not directed
              at individuals under 18. Personal data of minors is not knowingly
              collected without verifiable parental consent as required by the DPDP Act.
            </p>
          </Section>

          <Section title="10. Grievance officer">
            <p>
              In accordance with the Information Technology Act, 2000 and the DPDP
              Act, 2023, the Grievance Officer for this website is:
            </p>
            <p className="rounded-lg border border-rule bg-elevated p-4">
              <strong>Ambesh Tiwari</strong><br />
              BDA Technologies Pvt. Ltd., Delhi, India<br />
              Email: <a href="mailto:hello@ambesh.com" className="underline">hello@ambesh.com</a>
            </p>
            <p>Grievances are acknowledged within 48 hours and resolved within 30 days.</p>
          </Section>

          <Section title="11. Changes to this policy">
            <p>
              This policy may be updated periodically. The "Last updated" date at the
              top of this page reflects the most recent revision. Continued use of the
              website after changes are posted constitutes acceptance of the revised
              policy.
            </p>
          </Section>

          <Section title="12. Governing law and jurisdiction">
            <p>
              This Privacy Policy is governed by the laws of India. All disputes are
              subject to the exclusive jurisdiction of the courts at Delhi, India.
            </p>
          </Section>
        </article>
      </section>
    </div>
  );
}

function LegalIntro({ children }: { children: React.ReactNode }) {
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
