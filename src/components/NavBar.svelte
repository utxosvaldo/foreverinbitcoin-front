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
    <NavLi href="/about" activeClass="text-violet-700">Orders</NavLi>
  </NavUl>
</Navbar>
