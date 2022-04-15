<script context="module" lang="ts">
  export const load = async ({ fetch }) => {
    const posts = await fetch('/api/posts.json')
    const allPosts = await posts.json()

    return {
      props: {
        posts: allPosts
      }
    }
  }
</script>
<script lang="ts">
  import type { PostMeta } from '$lib/types'
  export let posts: PostMeta[]
</script>

<h1>Blog</h1>
<ul>
  {#each posts as post}
    <li><a href={post.path}>{post.meta.title}</a></li>
  {/each}
</ul>