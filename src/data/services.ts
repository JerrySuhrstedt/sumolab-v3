export interface ServiceFaq {
	question: string;
	answer: string;
}

export interface ServiceInclude {
	title: string;
	description: string;
}

export interface Service {
	slug: string;
	name: string;
	shortName: string;
	tagline: string;
	summary: string;
	situation: string;
	symptoms: string[];
	includes: ServiceInclude[];
	howItWorks: string[];
	outcomes: string[];
	whoItsFor: string[];
	whoItsNotFor: string[];
	faqs: ServiceFaq[];
}

export const fractionalMarketingDirector: Service = {
	slug: "fractional-marketing-director",
	name: "Fractional Marketing Director",
	shortName: "Fractional Marketing Director",
	tagline: "Senior marketing leadership, embedded in your business — without a full-time executive hire.",
	summary:
		"An experienced marketing leader who sets direction, coordinates your team and vendors, and owns accountability for results, on a fractional basis. You get senior leadership without the cost, delay, or risk of a full-time hire.",
	situation:
		"Your business has outgrown ad hoc marketing, but you're not ready to hire a full-time CMO. Decisions keep landing on your desk, and no one owns the outcome.",
	symptoms: [
		"Marketing decisions still route through the founder or CEO",
		"Multiple vendors and freelancers with no one coordinating the work",
		"Activity is happening, but priorities shift month to month",
		"No one is accountable for whether marketing is working",
		"Budget is being spent without a clear line to business goals",
	],
	includes: [
		{
			title: "Strategic direction",
			description: "A marketing plan tied to your business goals, not a generic content calendar.",
		},
		{
			title: "Team and vendor leadership",
			description: "One senior point of accountability coordinating your internal team, agencies, and freelancers.",
		},
		{
			title: "Prioritization and budget discipline",
			description: "Clear decisions about what to fund, what to pause, and why.",
		},
		{
			title: "Reporting leadership actually uses",
			description: "Performance tied to business outcomes, not vanity metrics.",
		},
	],
	howItWorks: [
		"Start with a working session to understand your business, goals, and current marketing setup.",
		"Get a focused plan and priorities within the first weeks of the engagement.",
		"Meet on a regular cadence for direction, review, and decisions.",
		"Scale involvement up or down as your needs change.",
	],
	outcomes: [
		"A clear, prioritized marketing plan tied to business goals",
		"One senior leader accountable for marketing performance",
		"Better-coordinated team, agencies, and vendors",
		"More confident, faster marketing decisions",
		"Less founder time spent managing marketing day to day",
	],
	whoItsFor: [
		"Companies generating $5M+ in annual revenue",
		"Businesses with marketing activity but no senior leadership",
		"Leadership teams not ready to hire a full-time marketing executive",
		"Companies with a team, budget, or vendors that need coordination",
	],
	whoItsNotFor: [
		"Very early-stage businesses looking for low-cost campaign execution",
		"Companies seeking a single isolated project rather than ongoing leadership",
	],
	faqs: [
		{
			question: "How is this different from hiring an agency?",
			answer:
				"An agency executes campaigns. A Fractional Marketing Director sets the strategy, coordinates everyone executing it, including your agencies, and is accountable for the outcome.",
		},
		{
			question: "How much time does this require from my team?",
			answer:
				"The engagement is structured around a regular cadence of working sessions, not constant meetings. The goal is to reduce the time leadership spends managing marketing, not add to it.",
		},
		{
			question: "Can this convert to a full-time hire later?",
			answer:
				"Yes. Many companies use a fractional engagement to build the function and clarify what a full-time hire should own before making that investment.",
		},
		{
			question: "What size company is this built for?",
			answer:
				"Established businesses generating at least $5M in annual revenue with real marketing activity already underway.",
		},
	],
};

export const businessMarketingConsulting: Service = {
	slug: "business-marketing-consulting",
	name: "Business Marketing Consulting",
	shortName: "Business Marketing Consulting",
	tagline: "Focused strategic support for a specific marketing challenge, without an ongoing retainer.",
	summary:
		"Targeted consulting for a specific growth, positioning, or performance challenge. You get senior strategic input where you need it most, scoped to the problem in front of you.",
	situation:
		"You don't need ongoing leadership. You need an experienced outside perspective on a specific decision: a positioning problem, a stalled growth channel, a reporting gap, or a plan for the next stage of growth.",
	symptoms: [
		"A specific growth channel has stalled and it's unclear why",
		"Positioning or messaging isn't landing with the right buyers",
		"Leadership needs a marketing plan before committing budget",
		"Reporting doesn't tie back to business performance",
		"A recent reorg or new hire needs a clear-eyed marketing assessment",
	],
	includes: [
		{
			title: "Marketing assessment",
			description: "An outside, senior review of your current strategy, team, and spend.",
		},
		{
			title: "Positioning and messaging",
			description: "Clarify how you talk about your business to the buyers who matter most.",
		},
		{
			title: "Growth and channel planning",
			description: "A practical plan for where to invest next, and why.",
		},
		{
			title: "Organizational recommendations",
			description: "Clarity on what roles, partners, or structure your marketing function actually needs.",
		},
	],
	howItWorks: [
		"Define the specific challenge and scope of the engagement together.",
		"Work through a structured assessment and a set of working sessions.",
		"Receive a clear, practical set of recommendations and next steps.",
		"Optionally extend into a Fractional Marketing Director engagement if ongoing leadership makes sense.",
	],
	outcomes: [
		"Clarity on the specific challenge you brought to the table",
		"A practical, prioritized set of recommendations",
		"Sharper positioning or messaging where needed",
		"A defensible case for the next marketing investment",
		"Confidence that the plan is grounded in your business, not a template",
	],
	whoItsFor: [
		"Leadership teams facing a specific marketing decision or challenge",
		"Companies that want senior input without an ongoing engagement",
		"Businesses evaluating whether they need a Fractional Marketing Director",
	],
	whoItsNotFor: [
		"Companies looking for hands-on campaign execution",
		"Businesses that need day-to-day marketing management, not project-based advice",
	],
	faqs: [
		{
			question: "How long does an engagement typically take?",
			answer:
				"Scope and timeline are set around the specific challenge. Most engagements are structured in weeks, not months.",
		},
		{
			question: "Do you execute the recommendations?",
			answer:
				"This service is strategic and advisory. Execution can be coordinated separately, including through a Fractional Marketing Director engagement if ongoing leadership is needed.",
		},
		{
			question: "What if we're not sure exactly what we need?",
			answer:
				"That's a normal starting point. The first conversation is about clarifying the actual problem before scoping any engagement.",
		},
	],
};

export const services: Service[] = [fractionalMarketingDirector, businessMarketingConsulting];

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((service) => service.slug === slug);
}
