<script context="module" lang="ts">
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
        categories: filteredCategories
      }
    }
  }
</script>

<script lang="ts">
  export let categories: string[]
</script>

<svelte:head>
  <title>All Categories | MRGB</title>
</svelte:head>

<h1>All Categories</h1>
<p class="text-base font-normal">
  <span><a href="/blog" class="links font-normal">blog</a></span> / 
  <span><a href="/blog/categories" class="font-normal">categories</a></span>
</p>
{#each categories as category}
  <a href="/blog/categories/{category}" class="border-b-0"><span class="px-2 py-0.5 mr-2 tag rounded-md">{category}</span></a>
{/each}

<style lang="scss">
  .links {
    color: #d4d4d4 !important;
    border-bottom: none;
  }
</style>