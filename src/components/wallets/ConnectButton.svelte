<script lang="ts">
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
  import { getAddress, GetAddressOptions } from 'sats-connect';

  export function authenticate() {
    showConnect({
      appDetails: {
        name: 'Forever in Bitcoin',
        icon: window.location.origin + '/foreverinbitcoin-transp.png'
      },
      //   redirectTo: '/',
      onFinish: () => {
        // window.location.reload();
        let ordinalAddress =
          userSession.loadUserData().profile.btcAddress.p2tr.mainnet;
        console.log('ordinals address:', ordinalAddress);
        receiveAddress.set(ordinalAddress);
        walletConnected.set(true);
        console.log('$receive address = ', $receiveAddress);
        console.log('wallet connected: ', $walletConnected);
      },
      userSession
    });
  }

  export async function authXVerseWallet() {
    const getAddressOptions = {
      payload: {
        purposes: ['ordinals'],
        message: 'Address for receiving Ordinals and payments',
        network: {
          type: 'Mainnet'
        }
      },
      onFinish: response => {
        console.log(response);
        let ordinalAddress = response.addresses[0].address;
        console.log('ordinals address:', ordinalAddress);
        receiveAddress.set(ordinalAddress);
        walletConnected.set(true);
        console.log('$receive address = ', $receiveAddress);
        console.log('wallet connected: ', $walletConnected);
      },
      onCancel: () => alert('Request canceled')
    };

    await getAddress(getAddressOptions);
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
  <!-- <DropdownItem on:click={authenticate}>
    <img class="h-5" id="hiro-wallet" src="/hirowallet.svg" alt="Hiro Wallet" />
  </DropdownItem> -->
  <DropdownItem on:click={authXVerseWallet}>
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
