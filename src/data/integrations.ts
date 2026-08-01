/**
 * Future integration points. Nothing here is wired to a live service yet —
 * the contact form submits nowhere and the CTA links to /contact until
 * these are filled in.
 *
 * - formEndpoint: a HubSpot Forms API endpoint, Formspree/Cal.com form
 *   action, or your own API route. Wire it into ContactForm.astro's
 *   client-side submit handler.
 * - schedulingUrl: a Calendly / Cal.com booking link. Once set, the
 *   primary CTA can point here directly instead of routing to /contact.
 */
export const integrations = {
	formEndpoint: null as string | null,
	schedulingUrl: null as string | null,
};
