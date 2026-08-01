export interface InsightArticle {
	slug: string;
	title: string;
	excerpt: string;
	publishedAt: string;
}

/** No articles published yet — the index page renders an honest empty state until this has entries. */
export const insights: InsightArticle[] = [];
