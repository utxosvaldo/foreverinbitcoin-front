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
  import { Wallet } from 'svelte-heros-v2';
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
    <Button rounded id="connect-wallet" size="xs" color="purple">
      <!-- <Wallet class="mr-1" />  -->
      Connect
    </Button>

    <NavHamburger
      on:click={toggle}
      class1="w-full md:flex md:w-auto md:order-1"
    />
  </div>
  <Dropdown placement="bottom" triggeredBy="#connect-wallet">
    <DropdownHeader>
      <span class="block text-sm">Connect your bitcoin wallet</span>
      <span class="block truncate text-sm font-medium"> Coming soon </span>
    </DropdownHeader>
    <DropdownItem>MetaMask</DropdownItem>
    <DropdownItem>Hiro</DropdownItem>
    <DropdownItem>Xverse</DropdownItem>
    <!-- <DropdownDivider />
    <DropdownItem>help</DropdownItem> -->
  </Dropdown>
  <NavUl {hidden} divClass="w-full md:block md:w-auto">
    <NavLi href="/" active={true} activeClass="text-violet-700">Home</NavLi>
    <NavLi href="/about" activeClass="text-violet-700">Orders</NavLi>
    <!-- <NavLi href="/services" activeClass="text-violet-700">FAQs</NavLi> -->
    <!-- <NavLi href="/pricing">Pricing</NavLi>
    <NavLi href="/contact">Contact</NavLi> -->
  </NavUl>
</Navbar>
