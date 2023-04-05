<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownHeader,
    DropdownDivider,
    Button
  } from 'flowbite-svelte';
  import { receiveAddress, walletConnected } from '../stores';
  import ConnectButton from './wallets/ConnectButton.svelte';
  import WalletButton from './wallets/WalletButton.svelte';

  function shortenAddress(address) {
    if (address.length <= 12) {
      return address; // Return the full address if it's already short enough
    }
    const firstSix = address.substr(0, 6); // Get the first six characters
    const lastSix = address.substr(-6); // Get the last six characters
    return `${firstSix}...${lastSix}`; // Combine the first six, three dots, and last six
  }

  $: buttonAddress = shortenAddress($receiveAddress);
</script>

<Navbar let:hidden let:toggle rounded color="purple" class="mb-6 py-0">
  <NavBrand href="/">
    <img
      src="foreverinbitcoin-transp.png"
      class="mr-3 h-9 sm:h-9"
      alt="Flowbite Logo"
    />
    <span
      class="self-center whitespace-nowrap text-md sm:text-lg font-semibold dark:text-white"
      >ForeverinBitcoin</span
    >
  </NavBrand>
  <div class="flex items-center md:order-2">
    {#if $walletConnected}
      <WalletButton />
    {:else}
      <ConnectButton />
    {/if}

    <NavHamburger
      on:click={toggle}
      class1="w-full md:flex md:w-auto md:order-1"
    />
  </div>

  <NavUl {hidden} divClass="w-full md:block md:w-auto">
    <NavLi href="/" active={true} activeClass="text-violet-700">Home</NavLi>
    <NavLi href="/#/orders" activeClass="text-violet-700">Orders</NavLi>
    <NavLi
      href="https://twitter.com/ForeverinBTC"
      activeClass="text-violet-700"
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
      ></NavLi
    >
  </NavUl>
</Navbar>
