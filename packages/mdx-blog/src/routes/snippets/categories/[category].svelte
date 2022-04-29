<script context="module" lang="ts">
  import type { Fetch, ParamCategory, PostMeta } from '$lib/types'
  import { fetchPosts } from '$lib/utils/fetchPosts';
  
  export const load = async ({ params, fetch }: { params: ParamCategory, fetch: typeof Fetch }) => {
    const currentCategory = params.category
    const posts = await fetchPosts(fetch, "snippets")

    const matchingPosts = posts.filter(post => post.meta.categories.includes(currentCategory))

    return {
      props: {
        posts: matchingPosts,
        category: currentCategory,
      }
    }
  }
</script>

<script lang="ts">
  import Category from '$lib/components/Category.svelte';
  export let posts: PostMeta[]
  export let category: string
  let title = 'code snippets'
  let path = 'snippets'
</script>

<Category {posts} {category} {title} {path}/>