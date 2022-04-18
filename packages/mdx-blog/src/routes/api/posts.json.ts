import { fetchPostsWithMetadata } from '$lib/utils/fetchPosts';

export const get = async () => {
	// const allPosts = await fetchPostsWithMetadata();
	const allPostFiles = import.meta.glob('../blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(2, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return {
		headers: {
			'cache-control': 'public, max-age=3600'
		},
		body: allPosts
	};
};
