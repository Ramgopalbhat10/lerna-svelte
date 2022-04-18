<script context="module" lang="ts">
  import type { ParamCategory, PostMeta } from '$lib/types'
  import { fetchPosts } from '$lib/utils/fetchPosts';
  
  export const load = async ({ params }: { params: ParamCategory }) => {
    const currentCategory = params.category
    const posts = await fetchPosts()

    const matchingPosts = posts.filter(post => post.meta.categories.includes(currentCategory))

    return {
      props: {
        posts: matchingPosts,
        category: currentCategory,
      }
    }
  }
</script>

<script lang="ts">
  export let posts: PostMeta[]
  export let category: string
</script>

<svelte:head>
  <title>All blog posts under { category } | MRGB</title>
</svelte:head>

<h1>All blog posts under <span class="border-b-cyan-800 border-b-4 !text-neutral-300">{category}</span></h1>
<p class="text-base font-normal">
  <span><a href="/blog" class="links font-normal">blog</a></span> / 
  <span><a href="/blog/categories" class="links font-normal">categories</a></span> / 
  <span><a href="/blog/categories/{category}" class="font-normal">{category}</a></span>
</p>
<ul>
  {#each posts as post}
    <li><a href={post.path}>{post.meta.title}</a></li>
  {/each}
</ul>

<style lang="scss">
  .links {
    color: #d4d4d4 !important;
    border-bottom: none;
  }
</style>