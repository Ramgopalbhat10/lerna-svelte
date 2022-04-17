<script lang="ts">
  import { onMount } from 'svelte';
  import { Accordion, AccordionItem } from 'flowbite-svelte';
  import { TableIconSolid } from '@codewithshin/svelte-heroicons';

  let toc: string[] = [];
  let tocId: string[] = [];
  let tocTag: string[] = [];
  let showTOC = false;

  onMount(() => {
    setTimeout(() => {
      const allTags = document.getElementsByTagName("main");
      const headTags = allTags.item(0).children;
  
      for (let index = 0; index < headTags.length; index++) {
        if(headTags[index].nodeName === "H2" || headTags[index].nodeName === "H3") {
          const heading = headTags[index].lastChild.nodeValue
          const id = headTags[index].id
          toc.push(heading)
          tocId.push(id)
          tocTag.push(headTags[index].nodeName)
        }   
      }
  
      if(toc.length >= 1) {
        showTOC = true
      }
    }, 150)
  })


</script>

{#if showTOC}  
  <Accordion>
    <AccordionItem id="1">
      <h3 slot="header" class="!m-0 !text-lg">
        <span class="flex">
          <span class="mr-2 mt-0.5"><TableIconSolid /></span> 
            Table of Contents
        </span>
      </h3>
      <div slot="body">
        {#each toc as heading, index}
          <p class="!m-0 text-gray-500 dark:text-gray-400" data-tag={tocTag[index]}>
            <a href={`#${tocId[index]}`}>{heading}</a>
          </p>
        {/each}
      </div>
    </AccordionItem>
  </Accordion>
{/if}

<style lang="scss">
  a {
    text-decoration: none
  }
  p[data-tag="H3"] {
    margin-left: 1rem !important;
    ::before {
      content: "●";
      text-decoration: none !important;
      margin-right: 1rem;
    }
  }
</style>