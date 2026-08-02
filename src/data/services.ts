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

export const fractionalCMO: Service = {
	slug: "fractional-cmo",
	name: "Fractional CMO",
	shortName: "Fractional CMO",
	tagline: "Executive-level marketing leadership to drive predictable growth, without the full-time CMO cost.",
	summary:
		"Board-level marketing leadership: strategy, direction, and accountability at the executive table. A Fractional CMO works at the highest strategic level, involved in leadership discussions and long-term brand and growth strategy, without the cost of a full-time hire.",
	situation:
		"Your business needs a senior marketing voice at the leadership table, not just someone running campaigns. Growth decisions are being made without real marketing expertise in the room.",
	symptoms: [
		"No senior marketing perspective in leadership or board discussions",
		"Long-term brand and growth strategy isn't clearly owned by anyone",
		"The owner or CEO is making marketing decisions without marketing expertise",
		"Marketing tactics exist, but no unified strategy connects them",
		"The company relies heavily on referrals and wants predictable lead generation",
	],
	includes: [
		{
			title: "Executive-level strategy",
			description: "Long-term brand and growth strategy set at the leadership table, not delegated downward.",
		},
		{
			title: "Board and leadership involvement",
			description: "A senior marketing voice in the executive discussions where growth decisions actually get made.",
		},
		{
			title: "Team and vendor leadership",
			description: "One senior point of accountability coordinating your internal team, agencies, and vendors.",
		},
		{
			title: "Metrics and reporting",
			description: "Marketing metrics and reporting tied to business outcomes, not vanity numbers.",
		},
	],
	howItWorks: [
		"Start with a working session to understand your business, goals, and current marketing setup.",
		"Get a focused strategy and priorities within the first weeks of the engagement.",
		"Meet on a regular cadence for direction, review, and decisions at the leadership level.",
		"Scale involvement up or down as your needs change.",
	],
	outcomes: [
		"Lower cost than hiring a full-time executive",
		"Immediate access to senior-level marketing experience",
		"Strategic leadership without long-term payroll risk",
		"Flexibility to scale marketing leadership as the company grows",
		"An objective, outside perspective on marketing performance",
	],
	whoItsFor: [
		"Companies generating $5M to $50M in annual revenue",
		"Leadership teams that need a senior marketing voice at the table",
		"Businesses too large to run without real marketing leadership, not yet large enough for a full-time CMO",
		"Companies that want long-term brand and growth strategy owned at the executive level",
	],
	whoItsNotFor: [
		"Very early-stage businesses looking for low-cost campaign execution",
		"Companies that need day-to-day, hands-on marketing execution rather than strategic leadership",
	],
	faqs: [
		{
			question: "How is a Fractional CMO different from a Fractional Marketing Director?",
			answer:
				"Both operate under the same fractional model. A Fractional CMO typically works at a higher strategic level, involved with executive leadership, board discussions, and long-term brand and growth strategy. A Fractional Marketing Director works closer to the operational side, guiding strategy while also overseeing execution, systems, and day-to-day marketing.",
		},
		{
			question: "How much does a full-time CMO cost compared to this?",
			answer:
				"A full-time Marketing Director or CMO often costs $150,000 to $300,000 per year once salary, benefits, bonuses, and overhead are included. A Fractional CMO gives you that same senior-level thinking at a fraction of the cost.",
		},
		{
			question: "Can this convert to a full-time hire later?",
			answer:
				"Yes. Many companies use a fractional engagement to build the function and clarify what a full-time hire should own before making that investment.",
		},
		{
			question: "What size company is this built for?",
			answer: "Established businesses generating $5M to $50M in annual revenue with real marketing activity already underway.",
		},
	],
};

export const fractionalMarketingDirector: Service = {
	slug: "fractional-marketing-director",
	name: "Fractional Marketing Director",
	shortName: "Fractional Marketing Director",
	tagline: "Executive-level marketing leadership to drive predictable growth, without the full-time Marketing Director cost.",
	summary:
		"An experienced marketing leader who sets strategy and also oversees execution, systems, and day-to-day marketing operations, on a fractional basis. You get senior leadership closer to the operational work, without the cost, delay, or risk of a full-time hire.",
	situation:
		"Your business has outgrown ad hoc marketing, but you're not ready to hire a full-time executive. Decisions keep landing on your desk, and no one owns the outcome, or the execution.",
	symptoms: [
		"Marketing decisions still route through the founder or CEO",
		"Multiple vendors and freelancers with no one coordinating the work",
		"Activity is happening, but priorities shift month to month",
		"No one is accountable for whether marketing is working",
		"Budget is being spent without a clear line to business goals",
	],
	includes: [
		{
			title: "Marketing strategy",
			description: "A clear marketing strategy, brand positioning, and messaging tied to your business goals.",
		},
		{
			title: "Sales and lead-gen alignment",
			description: "Marketing aligned with sales objectives, plus the lead generation systems that feed them.",
		},
		{
			title: "Website and CRM systems",
			description: "Website strategy, conversion optimization, and CRM or marketing automation implementation.",
		},
		{
			title: "Agency and vendor management",
			description: "One senior point of accountability managing agencies and marketing vendors day to day.",
		},
	],
	howItWorks: [
		"Start with a working session to understand your business, goals, and current marketing setup.",
		"Get a focused plan and priorities within the first weeks of the engagement.",
		"Meet on a regular cadence for direction, review, and hands-on execution.",
		"Scale involvement up or down as your needs change.",
	],
	outcomes: [
		"Lower cost than hiring a full-time executive",
		"Immediate access to senior-level experience",
		"Marketing organized into a system instead of scattered tactics",
		"Better-coordinated team, agencies, and vendors",
		"Less founder time spent managing marketing day to day",
	],
	whoItsFor: [
		"Companies generating $5M to $50M in annual revenue",
		"Businesses with marketing activity but no senior leadership",
		"Leadership teams not ready to hire a full-time marketing executive",
		"Companies that need strategy and hands-on oversight of execution, not just advice",
	],
	whoItsNotFor: [
		"Very early-stage businesses looking for low-cost campaign execution",
		"Companies that primarily need board-level brand and growth strategy rather than operational leadership",
	],
	faqs: [
		{
			question: "How is this different from hiring an agency?",
			answer:
				"An agency executes campaigns. A Fractional Marketing Director sets the strategy, coordinates everyone executing it, including your agencies, and is accountable for the outcome.",
		},
		{
			question: "How is this different from a Fractional CMO?",
			answer:
				"Both operate under the same fractional model. A Fractional Marketing Director typically works closer to the operational side of marketing, guiding strategy but also overseeing execution, systems, and day-to-day marketing. A Fractional CMO usually works at a higher strategic level involved with board discussions and long-term brand strategy.",
		},
		{
			question: "Can this convert to a full-time hire later?",
			answer:
				"Yes. Many companies use a fractional engagement to build the function and clarify what a full-time hire should own before making that investment.",
		},
		{
			question: "What size company is this built for?",
			answer: "Established businesses generating $5M to $50M in annual revenue with real marketing activity already underway.",
		},
	],
};

export const services: Service[] = [fractionalCMO, fractionalMarketingDirector];

export function getServiceBySlug(slug: string): Service | undefined {
	return services.find((service) => service.slug === slug);
}
