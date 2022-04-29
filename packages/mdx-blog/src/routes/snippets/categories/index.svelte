<script context="module" lang="ts">
  import type { Fetch } from '$lib/types'
  import { fetchPosts, filterCategories } from '$lib/utils/fetchPosts';
  export const load = async ({ fetch }: { fetch: typeof Fetch }) => {
    const posts = await fetchPosts(fetch, "snippets")
    const filteredCategories = filterCategories(posts)

    return {
      props: {
        categories: filteredCategories
      }
    }
  }
</script>

<script lang="ts">
  import Categories from '$lib/components/Categories.svelte';
  export let categories: string[]
  let path = 'snippets'
</script>

<Categories {categories} {path}/>
