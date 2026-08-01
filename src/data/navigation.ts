export interface NavLink {
	label: string;
	href: string;
}

export const primaryNav: NavLink[] = [
	{ label: "Services", href: "/services" },
	{ label: "Approach", href: "/approach" },
	{ label: "Who It's For", href: "/who-its-for" },
	{ label: "About", href: "/about" },
	{ label: "Insights", href: "/insights" },
];

export const primaryCta: NavLink = {
	label: "Book a Strategy Call",
	href: "/contact",
};

export const footerNav = {
	company: [
		{ label: "About", href: "/about" },
		{ label: "Approach", href: "/approach" },
		{ label: "Who It's For", href: "/who-its-for" },
		{ label: "Insights", href: "/insights" },
	] satisfies NavLink[],
	services: [
		{ label: "Fractional Marketing Director", href: "/services" },
		{ label: "Business Marketing Consulting", href: "/services" },
	] satisfies NavLink[],
};

export const legalNav: NavLink[] = [
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Terms", href: "/terms" },
];
