<script>
  import ScrollToTop from "$lib/components/ScrollToTop.svelte";
  import TableofContents from "$lib/components/TableofContents.svelte";
  export let title
  export let date
  export let tags
</script>

<h1>{title}</h1>

<div class="flex justify-between text-base">
  <p class="!m-0">Published: {date}</p>
  <p class="!m-0">Tags: <span class="px-2 py-0.5 tag rounded-md">{tags}</span></p>
</div>
<TableofContents />
<ScrollToTop />

<slot />