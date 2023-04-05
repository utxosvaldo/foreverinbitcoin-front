<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
    FooterIcon
  } from 'flowbite-svelte';
</script>

<Footer
  footerType="custom"
  customClass="p-4 bg-transparent md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800"
>
  <div class="flex mt-4 space-x-6 justify-center sm:mt-0">
    <FooterCopyright
      href="/"
      by="ForeverinBitcoin"
      year={2023}
      copyrightMessage={''}
    />
    <FooterIcon
      href="https://twitter.com/ForeverinBTC"
      class="text-gray-400 hover:text-violet-500"
      target="_blank"
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        ><path
          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
        /></svg
      >
    </FooterIcon>
  </div>
</Footer>
