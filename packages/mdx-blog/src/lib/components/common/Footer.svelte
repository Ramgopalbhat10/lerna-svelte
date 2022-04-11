<script>
  import { SimpleFooter } from 'flowbite-svelte'

  let site = {
    href: '/',
    name: 'MSRGB'
  };
  let links = []
</script>

<div class="py-2 mt-2 text-xs flex justify-center">
  <SimpleFooter {links} {site} 
    footerClass="sm:flex sm:justify-center sm:flex-1"
    ulClass="m-0"  
  />
</div>