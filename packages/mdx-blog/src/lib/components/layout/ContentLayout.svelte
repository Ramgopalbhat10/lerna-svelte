<script lang="ts">
  import ScrollToTop from "$lib/components/ScrollToTop.svelte";
  import TableofContents from "$lib/components/TableofContents.svelte";
  export let title
  export let description
  export let date
  export let categories
  export let path
  $: published = new Date(date).toDateString().slice(4)
  $: {
    let dateSplit = published.split(" ")
    dateSplit[1] = dateSplit[1] + ","
    published = dateSplit.join(" ")
  }
</script>

<svelte:head>
  <title>{title} | MRGB</title>
  <meta name="author" content="Madumbu Ramgopal" />
  <meta name="description" content={description} />
  <meta
    name="keywords"
    content="Madumbu Ramgopal, Blog, Web Development, Angular, React, Vue, JavasScript, TypeScript, HTML, CSS, Monorepos, Nx"
  />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
</svelte:head>

<h1>{title}</h1>

<div class="text-base !mb-8 flex items-center">
  <p class="m-0 mr-4">{published}</p>
  <p class="m-0"> 
    {#each categories as category}
      <a href="/{path}/categories/{category}" class="border-b-0" sveltekit:prefetch><span class="px-2 py-0.5 mr-2 tag rounded-md">{category}</span></a>
    {/each}
  </p>
</div>
<TableofContents />
<ScrollToTop />