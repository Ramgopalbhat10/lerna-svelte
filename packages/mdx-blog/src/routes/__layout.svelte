<script context="module" lang="ts">
  export const load = ({ url }: { url: URL }) => {
    const currentRoute = url.pathname
    const canonicalURL = url.href
  
    return {
      props: {
        currentRoute,
        canonicalURL
      }
    }
  }
</script>

<script lang="ts">
  import { fade } from "svelte/transition";
  import Header from '$lib/components/layout/Header.svelte'
  import Footer from '$lib/components/layout/Footer.svelte'
  import "$lib/styles/app.scss";

  export let currentRoute: string
  export let canonicalURL
  $: route = currentRoute.slice(1).charAt(0).toUpperCase() + currentRoute.slice(2)
</script>

<svelte:head>
  <title>{ route } | MRGB</title>
  <meta name="theme-color" content="#18181b" />
	<meta name="description" content="My personal website with my projects and blog posts." />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={route} />
  <meta property="og:description" content="My personal website with my projects and blog posts." />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:site_name" content="https://rgb-blog.vercel.app" />
  <meta property="og:locale" content="en_US" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@Batmansubbu" />
  <meta name="twitter:creator" content="@Batmansubbu" />
  <meta name="twitter:title" content={route} />
  <meta name="twitter:description" content="My personal website with my projects and blog posts." />
</svelte:head>

<!-- <div class="text-gray-300"> -->
  <Header />
  <div class="min-h-screen">
    {#key currentRoute}
      <main 
        class="p-3 prose lg:prose-xl m-auto text-gray-300 font-sans relative"
        in:fade={{ duration: 150, delay: 150 }}
        out:fade={{ duration: 150 }}
      >
        <slot />
      </main>
    {/key}
  </div>
  <Footer />
<!-- </div> -->