<script lang="ts">
  import type { PostMeta } from '$lib/types'
  export let posts: PostMeta[]
  export let category: string
  export let title: string
  export let path: string
</script>

<svelte:head>
  <title>All {title} under { category } | MRGB</title>
</svelte:head>

<h1>All {title} under <span class="border-b-cyan-800 border-b-4 !text-neutral-300">{category}</span></h1>
<p class="text-base font-normal">
  <span><a href="/{path}" class="links font-normal">{path}</a></span> / 
  <span><a href="/{path}/categories" class="links font-normal">categories</a></span> / 
  <span><a href="/{path}/categories/{category}" class="font-normal">{category}</a></span>
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