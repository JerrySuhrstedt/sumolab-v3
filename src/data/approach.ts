export interface ApproachPhase {
	number: string;
	title: string;
	description: string;
	detail: string;
}

export const approachPhases: ApproachPhase[] = [
	{
		number: "01",
		title: "Diagnose",
		description:
			"Understand your business, market position, and where marketing is actually creating or losing value.",
		detail:
			"We start with a structured assessment of your business goals, current marketing activity, team, vendors, and reporting. The goal is a clear, honest picture of what's working, what isn't, and why, before recommending anything.",
	},
	{
		number: "02",
		title: "Focus",
		description: "Cut the list down to the priorities that actually move the business forward.",
		detail:
			"Growing companies rarely have too few marketing ideas. They have too many, with no way to rank them. We build a prioritized plan tied directly to your business goals, so budget and attention go where they'll matter.",
	},
	{
		number: "03",
		title: "Lead",
		description: "Senior leadership coordinating your team, agencies, and vendors toward the same plan.",
		detail:
			"This is where a Fractional Marketing Director earns the title: running the cadence, making the calls, and holding your team and partners accountable to the plan, not just advising from the sidelines.",
	},
	{
		number: "04",
		title: "Improve",
		description: "Review performance against business outcomes and adjust with discipline.",
		detail:
			"Marketing plans should evolve as you learn. We review performance against the business outcomes that matter, not vanity metrics, and adjust priorities on a regular cadence.",
	},
];
