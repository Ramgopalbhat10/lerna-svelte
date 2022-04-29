<script lang="ts">
  import { Navbar } from 'flowbite-svelte';
  import logo from '$lib/assets/images/logo2.png';

  let name = 'MRGB';
  let alt = "MRGB site";
  let textsize = "text-xl";
  let menus = [
    {
      name: 'About',
      href: "/about"
    },
    {
      name: 'Blog',
      href: "/blog"
    },
    {
      name: 'Snippets',
      href: "/snippets"
    },
    {
      name: 'Contact',
      href: "/contact"
    }
  ]
</script>

<div class="p-3 font-medium shadow-md">
  <Navbar {menus} {name} {alt} {logo} {textsize} 
    spanClass="mx-2 my-0.5 text-gray-300 text-xl" 
    navClass="active:text-gray-800"
    liLinkClass="hover:border-b-underline hover:border-b-2 hover:text-highlight text-gray-300 text-base m-1.5 nav-links"
  />
</div>

<!-- <style lang="scss">
  .nav-links {
    ul > li {
      color: #22d3ee !important;
    }
  }
</style> -->