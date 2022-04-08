# Learning Sveltekit with tailwind nd mdx

## Here's some stuff I use

- SvelteKit
- VS Code
- Emojis 😎

```javascript
import { mdsvex } from 'mdsvex';

const config = {
	kit: {
		/* Kit options here */
	},

	extensions: ['.svelte', '.md'],

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	]
};
```
