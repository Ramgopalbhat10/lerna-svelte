<script>
  import { SimpleFooter } from 'flowbite-svelte'

  let site = {
    href: '/',
    name: 'MSRGB'
  };
  let links = []
</script>

<div class="p-1 bg-neutral-800 text-xs flex justify-center border-t-neutral-700 border-t-2">
  <SimpleFooter {links} {site} 
    footerClass="bg-neutral-800 sm:flex sm:justify-center sm:flex-1"
    ulClass="m-0"  
  />
</div>