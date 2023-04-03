<script>
  import {
    Button,
    Dropdown,
    DropdownHeader,
    DropdownItem
  } from 'flowbite-svelte';
  import HiroConnectButton from './HiroConnectButton.svelte';
  import { showConnect } from '@stacks/connect';
  import { userSession } from '../../stacksUserSession';
  import { receiveAddress, walletConnected } from '../../stores';

  export function authenticate() {
    showConnect({
      appDetails: {
        name: 'Forever in Bitcoin',
        icon: 'http://localhost/foreverinbitcoin-transp.png'
      },
      //   redirectTo: '/',
      onFinish: () => {
        // window.location.reload();
        receiveAddress.set(
          userSession.loadUserData().profile.btcAddress.p2tr.mainnet
        );
        walletConnected.set(true);
      },
      userSession
    });
  }
</script>

<Button rounded id="connect-wallet" size="xs" color="purple">Connect</Button>

<Dropdown
  placement="bottom"
  triggeredBy="#connect-wallet"
  class="bg-violet-50 rounded py-2"
>
  <DropdownHeader>
    <span class="block text-sm">Connect your bitcoin wallet</span>
    <!-- <span class="block truncate text-sm font-medium"> Coming soon </span> -->
  </DropdownHeader>
  <DropdownItem on:click={authenticate}>
    <img class="h-5" id="hiro-wallet" src="/hirowallet.svg" alt="Hiro Wallet" />
  </DropdownItem>
  <DropdownItem on:click={authenticate}>
    <img class="h-5" id="xverse-wallet" src="/xverse.svg" alt="Xverse Wallet" />
  </DropdownItem>
  <DropdownItem>
    <img
      class="h-5"
      id="metamask-wallet"
      src="/metamask.svg"
      alt="Metamask Wallet"
    /></DropdownItem
  >
</Dropdown>
