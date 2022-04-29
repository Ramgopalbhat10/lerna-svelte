<script lang="ts">
  import type { PostMeta } from '$lib/types'
  export let posts: PostMeta[]
  export let categories: string[]
  export let title: string
  export let path: string
</script>

<svelte:head>
  <title>My {title} | MRGB</title>
</svelte:head>

<h1>{title}</h1>
<ul>
  {#each posts as post}
    <li><a href={post.path} class="text-neutral-300" sveltekit:prefetch>{post.meta.title}</a></li>
  {/each}
</ul>
{#if categories.length > 0}
  <h1 class="mt-16">All Categories</h1>
  <div class="flex flex-wrap">
    {#each categories as category}
      <a href="/{path}/categories/{category}" class="border-b-0 mb-2" sveltekit:prefetch><span class="px-2 py-0.5 mr-2 tag rounded-md text-neutral-300">{category}</span></a>
    {/each}
  </div>
{/if}