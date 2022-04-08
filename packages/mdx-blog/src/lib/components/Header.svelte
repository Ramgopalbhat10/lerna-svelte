<script lang="ts">
  import { Navbar } from 'flowbite-svelte';
  import logo from '$lib/assets/logo2.png';

  let name = 'MSRGB';
  let alt = "MRGB site";
  let textsize = "text-xl";
  let menus = [
    {
      name: 'Blog',
      href: "/blog"
    },
    {
      name: 'About',
      href: "/about"
    },
    {
      name: 'Contact',
      href: "/contact"
    }
  ]
</script>

<div class="p-3 bg-neutral-800 font-medium shadow-lg border-b-neutral-700 border-b-2">
  <Navbar {menus} {name} {alt} {logo} {textsize} 
    spanClass="mx-2 my-0.5 text-gray-300 text-xl" 
    navClass="bg-neutral-800 active:text-gray-800"
    liLinkClass="hover:underline text-gray-300 text-base m-1.5"
  />
</div>