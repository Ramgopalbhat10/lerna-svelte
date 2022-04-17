import type { PostMeta } from '$lib/types';
import { fetchPostsWithMetadata } from '$lib/utils/fetchPosts';

const siteURL = 'https://rgb-blog.vercel.app';
const siteTitle = 'RGB | Not a 10X developer';
const siteDescription = 'My personal website with my projects and blog posts.';

export const get = async () => {
	const allPosts = await fetchPostsWithMetadata();
	const body = render(allPosts);
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	return {
		body,
		headers
	};
};

const render = (posts: PostMeta[]) =>
	`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
	<title>${siteTitle}</title>
	<description>${siteDescription}</description>
	<link>${siteURL}</link>
	<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
		${posts
			.map(
				(post) =>
					`<item>
					<guid isPermaLink="true">${siteURL}/blog/${post.path}</guid>
					<title>${post.meta.title}</title>
					<link>${siteURL}/blog/${post.path}</link>
					<description>${post.meta.description}</description>
					<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
				</item>`
			)
			.join('')}
	</channel>
</rss>`;
