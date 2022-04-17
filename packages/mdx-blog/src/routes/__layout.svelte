<script context="module" lang="ts">
  export const load = ({ url }: { url: URL }) => {
    const currentRoute = url.pathname
  
    return {
      props: {
        currentRoute
      }
    }
  }
</script>

<script lang="ts">
  import { fade } from "svelte/transition";
  import Header from '$lib/components/common/Header.svelte'
  import Footer from '$lib/components/common/Footer.svelte'
  import "$lib/styles/app.scss";

  export let currentRoute: string
</script>

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