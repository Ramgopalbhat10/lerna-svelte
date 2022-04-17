<script context="module" lang="ts">
  import type { PostMeta } from '$lib/types'
  import { fetchPosts } from '$lib/utils/fetchPosts';
  export const load = async () => {
    const posts = await fetchPosts()

    const categories = posts.reduce((arr: string[], post) => {
      arr.push(...post.meta.categories)
      return arr
    }, [])
    const filteredCategories = [...new Set(categories)]

    return {
      props: {
        posts: posts,
        categories: filteredCategories
      }
    }
  }
</script>
<script lang="ts">
  export let posts: PostMeta[]
  export let categories: string[]
</script>

<svelte:head>
  <title>My blog posts | rgb</title>
</svelte:head>

<h1>Blog posts</h1>
<ul>
  {#each posts as post}
    <li><a href={post.path} sveltekit:prefetch>{post.meta.title}</a></li>
  {/each}
</ul>
<h1 class="mt-16">All Categories</h1>
<div class="flex flex-wrap">
  {#each categories as category}
    <a href="/blog/categories/{category}" class="border-b-0 mb-2" sveltekit:prefetch><span class="px-2 py-0.5 mr-2 tag rounded-md">{category}</span></a>
  {/each}
</div>