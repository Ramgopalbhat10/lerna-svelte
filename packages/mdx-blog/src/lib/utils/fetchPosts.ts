import type { Meta, PostMeta } from '$lib/types';

export const fetchPosts = async () => {
	const response = await fetch('/api/posts.json');
	const posts: PostMeta[] = await response.json();

	return posts;
};

export const fetchPostsWithMetadata = async (): Promise<PostMeta[]> => {
	const allPostFiles = import.meta.glob('./../../routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.split('routes')[1];

			return {
				meta: metadata as Meta,
				path: postPath
			};
		})
	);
	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return sortedPosts;
};
