<script lang="ts">
  import ScrollToTop from "$lib/components/ScrollToTop.svelte";
  import TableofContents from "$lib/components/TableofContents.svelte";
  export let title
  export let date
  export let categories
</script>

<svelte:head>
  <title>{title} | rgb</title>
  <meta property="og:title" content={title} />
</svelte:head>

<h1>{title}</h1>

<div class="text-base">
  <p class="!mt-0 !mb-2">Published: {new Date(date).toDateString().slice(3)}</p>
  <p class="!mt-0 !mb-2">Categories: 
    {#each categories as category}
      <a href="/blog/categories/{category}" class="border-b-0" sveltekit:prefetch><span class="px-2 py-0.5 ml-2 tag rounded-md">{category}</span></a>
    {/each}
  </p>
</div>
<TableofContents />
<ScrollToTop />

<slot />