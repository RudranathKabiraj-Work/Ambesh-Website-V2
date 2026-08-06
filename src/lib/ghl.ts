import { createServerFn } from "@tanstack/react-start";

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  designation?: string;
  teamSize?: string;
  format?: string;
  timeline?: string;
  challenge?: string;
  serviceLabel?: string;
  pageUrl: string;
};

export const submitLeadToGHL = createServerFn({ method: "POST" })
  .validator((data: LeadPayload) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.LEADCONNECTOR_API_KEY;
    const locationId = process.env.LEADCONNECTOR_LOCATION_ID;

    if (!apiKey) {
      console.warn("LEADCONNECTOR_API_KEY is missing. Skipping CRM sync.");
      return { success: false, reason: "missing_api_key" };
    }

    const [firstName, ...lastNameParts] = data.name.trim().split(" ");
    const lastName = lastNameParts.join(" ");

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      Version: GHL_API_VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    try {
      const contactPayload: Record<string, unknown> = {
        name: data.name,
        firstName: firstName || "",
        lastName: lastName || "",
        email: data.email,
        companyName: data.company,
        tags: ["ambesh.com", data.serviceLabel].filter(Boolean),
        customFields: [
          {
            id: "9SrE2BqAumcvaZMeESO6", // Page source
            value: data.pageUrl,
          },
        ],
      };
      if (locationId) contactPayload.locationId = locationId;

      const contactResponse = await fetch(`${GHL_API_BASE}/contacts`, {
        method: "POST",
        headers,
        body: JSON.stringify(contactPayload),
      });

      if (!contactResponse.ok) {
        const errorText = await contactResponse.text();
        console.error("Failed to create GHL contact:", errorText);
        return { success: false, reason: "contact_create_failed" };
      }

      const contactData = await contactResponse.json();
      const contactId = contactData.contact?.id;

      if (!contactId) {
        console.warn("Contact created but no ID returned for notes.");
        return { success: true };
      }

      const submittedAtIST = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      });

      const notesText = [
        "=== Website Form Submission ===",
        `Submitted (IST): ${submittedAtIST}`,
        "",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.company ? `Company: ${data.company}` : "",
        data.designation ? `Designation: ${data.designation}` : "",
        data.teamSize ? `Team size: ${data.teamSize}` : "",
        data.format ? `Preferred format: ${data.format}` : "",
        data.timeline ? `Timeline: ${data.timeline}` : "",
        data.serviceLabel ? `Interested in: ${data.serviceLabel}` : "",
        `Page source: ${data.pageUrl}`,
        data.challenge ? "\nWhere time is being lost:" : "",
        data.challenge || "",
      ]
        .filter(Boolean)
        .join("\n");

      const noteResponse = await fetch(`${GHL_API_BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers,
        body: JSON.stringify({ body: notesText }),
      });

      if (!noteResponse.ok) {
        console.error("Failed to add note to GHL contact");
      }

      return { success: true };
    } catch (error) {
      console.error("Error sending data to GHL:", error);
      return { success: false, reason: "network_error" };
    }
  });
