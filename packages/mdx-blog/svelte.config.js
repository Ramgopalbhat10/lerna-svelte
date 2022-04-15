import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkCodeTitles from 'remark-code-titles';
import { createShikiHighlighter, runTwoSlash, renderCodeToHTML } from 'shiki-twoslash';
import { readFileSync } from 'fs';
import { h } from 'hastscript';

// const moonlight = JSON.parse(readFileSync('./moonlight.json'));

const mdxVexPreprocess = mdsvex({
	extensions: ['.svx', '.md'],
	layout: {
		blog: 'src/routes/blog/_post.svelte'
	},
	highlight: {
		highlighter: async (code, lang, meta) => {
			const highlighter = await createShikiHighlighter({
				theme: JSON.parse(readFileSync('./moonlight.json'))
			});

			let twoslashResults = null;
			if (meta && meta.includes('twoslash')) {
				twoslashResults = runTwoSlash(code, lang, {});
			}

			const html = renderCodeToHTML(code, lang, meta || [], {}, highlighter, twoslashResults);

			return `{@html \`${html}\` }`;
		}
	},
	remarkPlugins: [remarkCodeTitles],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'prepend',
				content: [h('span.visually-hidden', '#')]
			}
		]
	]
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [preprocess(), mdxVexPreprocess],
	kit: {
		adapter: adapter()
	}
};

export default config;
