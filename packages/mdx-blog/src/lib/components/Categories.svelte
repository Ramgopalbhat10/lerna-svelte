<script lang="ts">
  export let categories: string[]
  export let path: string
</script>

<svelte:head>
  <title>All Categories | MRGB</title>
</svelte:head>

<h1>All Categories</h1>
<p class="text-base font-normal">
  <span><a href="/{path}" class="links font-normal">{path}</a></span> / 
  <span><a href="/{path}/categories" class="font-normal">categories</a></span>
</p>
{#each categories as category}
  <a href="/{path}/categories/{category}" class="border-b-0"><span class="px-2 py-0.5 mr-2 tag rounded-md">{category}</span></a>
{/each}

<style lang="scss">
  .links {
    color: #d4d4d4 !important;
    border-bottom: none;
  }
</style>