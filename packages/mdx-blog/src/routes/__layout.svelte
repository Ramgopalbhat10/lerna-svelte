<script lang="ts">
  import Header from '$lib/components/common/Header.svelte'
  import Footer from '$lib/components/common/Footer.svelte'
  import "$lib/styles/app.scss";
</script>

<!-- <div class="text-gray-300"> -->
  <Header />
  <div class="min-h-screen">
    <main class="p-3 prose lg:prose-xl m-auto text-gray-300 font-sans relative">
      <slot />
    </main>
  </div>
  <Footer />
<!-- </div> -->