---
---

<script>
	import TableofContents from '$lib/components/TableofContents.svelte';
</script>

<TableofContents />

# Learning Sveltekit with tailwind and mdx

## This is my heading

### This is sub heading

## Here's some stuff I use 2

- SvelteKit
- VS Code
- Emojis 😎

```jsx:index.jsx
import Document, {Html, Head, Main, NextScript} from 'next/document';

// 🔥 Super granular and accurate highlighting
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-zinc-800 text-zinc-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```
