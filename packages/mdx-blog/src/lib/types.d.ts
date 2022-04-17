export type Meta = {
	title: string;
	description: string;
	date: string;
	heroImageAlt?: string;
	thumbnailImageAlt?: string;
	categories: string | string[];
};

export type PostMeta = {
	meta: Meta;
	path: string;
};

export type ParamCategory = {
	category: string;
};

export declare function Fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
