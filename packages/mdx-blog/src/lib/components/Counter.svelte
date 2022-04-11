<script lang="ts">
  import { onMount } from "svelte";
  let count = 0
  const increment = () => {
    count += 1
  }

  onMount(() => {
    console.log(document.getElementsByTagName("h1")[0].innerText)
    console.log(document.getElementsByTagName("h3")[0].innerText)
  })
</script>

<button on:click="{increment}">Count: {count}</button>