export type Meta = {
	title: string;
	description: string;
	date: string;
	heroImageAlt?: string;
	thumbnailImageAlt?: string;
	tags: string;
};

export type PostMeta = {
	meta: Meta;
	path: string;
};
