<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink
  } from 'flowbite-svelte';
</script>

<Footer
  footerType="custom"
  customClass="p-4 bg-transparent md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800"
>
  <FooterCopyright href="/" by="ForeverinBitcoin" year={2023} />
  <!-- <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/" >Contact</FooterLink>
  </FooterLinkGroup> -->
</Footer>
