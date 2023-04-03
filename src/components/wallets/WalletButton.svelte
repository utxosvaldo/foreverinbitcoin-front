<script>
  import {
    Button,
    Dropdown,
    DropdownHeader,
    DropdownItem
  } from 'flowbite-svelte';
  import { receiveAddress, walletConnected } from '../../stores';
  import { userSession } from '../../stacksUserSession';

  function shortenAddress(address) {
    if (address.length <= 12) {
      return address; // Return the full address if it's already short enough
    }
    const firstSix = address.substr(0, 6); // Get the first six characters
    const lastSix = address.substr(-6); // Get the last six characters
    return `${firstSix}...${lastSix}`; // Combine the first six, three dots, and last six
  }

  $: buttonAddress = shortenAddress($receiveAddress);

  export function disconnect() {
    userSession.signUserOut('/');
    walletConnected.set(false);
  }
</script>

<Button rounded id="wallet" size="xs" gradient color="purpleToPink"
  >{buttonAddress}</Button
>
<Dropdown placement="bottom" triggeredBy="#wallet">
  <DropdownHeader>
    <span class="block text-sm">Connect your bitcoin wallet</span>
    <span class="block truncate text-sm font-medium"> Coming soon </span>
  </DropdownHeader>
  <DropdownItem on:click={disconnect}>Disconnect</DropdownItem>
</Dropdown>
