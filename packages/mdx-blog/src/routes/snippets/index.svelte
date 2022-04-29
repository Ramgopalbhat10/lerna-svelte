<script context="module" lang="ts">
  import type { PostMeta, Fetch } from '$lib/types'
  import { fetchPosts, filterCategories } from '$lib/utils/fetchPosts';
  
  export const load = async ({ fetch }: { fetch: typeof Fetch }) => {
    const posts = await fetchPosts(fetch, "snippets")
    const filteredCategories = filterCategories(posts)
    return {
      props: {
        posts: posts,
        categories: filteredCategories
      }
    }
  }
</script>
<script lang="ts">
  import ContentList from '$lib/components/ContentList.svelte';
  export let posts: PostMeta[]
  export let categories: string[]
  let title = "Code Snippets"
  let path = "snippets"
</script>

<ContentList {posts} {categories} {title} {path}/>