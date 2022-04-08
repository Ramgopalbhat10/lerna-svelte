<script lang="ts">
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import "$lib/styles/app.css";
</script>

<div class="text-gray-300">
  <Header />
  <main class="p-3 my-16 prose lg:prose-xl m-auto h-screen text-gray-300">
    <slot />
  </main>
  <Footer />
</div>