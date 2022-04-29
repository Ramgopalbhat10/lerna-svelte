<script lang="ts">
  import ContentLayout from "$lib/components/layout/ContentLayout.svelte";
  export let title
  export let description
  export let date
  export let categories
  let path = 'snippets'
</script>

<ContentLayout {title} {description} {date} {categories} {path}/>
<slot />