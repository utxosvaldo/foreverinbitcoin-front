<script lang="ts">
  import {
    Button,
    Dropdown,
    DropdownHeader,
    DropdownItem,
    Span
  } from 'flowbite-svelte';
  import HiroConnectButton from './HiroConnectButton.svelte';
  import { showConnect } from '@stacks/connect';
  // import { userSession } from '../../stacksUserSession';
  import { receiveAddress, walletConnected } from '../../stores';
  import { getAddress } from 'sats-connect';
  // import { generateBitcoinKey } from '../../connectMetamask';

  // export function authenticate() {
  //   showConnect({
  //     appDetails: {
  //       name: 'Forever in Bitcoin',
  //       icon: window.location.origin + '/foreverinbitcoin-transp.png'
  //     },
  //     //   redirectTo: '/',
  //     onFinish: () => {
  //       // window.location.reload();
  //       let ordinalAddress =
  //         userSession.loadUserData().profile.btcAddress.p2tr.mainnet;
  //       console.log('ordinals address:', ordinalAddress);
  //       receiveAddress.set(ordinalAddress);
  //       walletConnected.set(true);
  //       console.log('$receive address = ', $receiveAddress);
  //       console.log('wallet connected: ', $walletConnected);
  //     },
  //     userSession
  //   });
  // }

  export async function authXVerseWallet() {
    const getAddressOptions = {
      payload: {
        purposes: ['ordinals'],
        message: 'Address for receiving Ordinals',
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
    <span class="block truncate text-sm font-medium">
      or input your receive address below
    </span>
  </DropdownHeader>
  <DropdownItem on:click={authXVerseWallet}>
    <!-- <DropdownItem on:click={onClick}> -->
    <img class="h-7" id="xverse-wallet" src="/xverse.svg" alt="Xverse Wallet" />
  </DropdownItem>
  <DropdownItem>
    <img class="h-4" id="hiro-wallet" src="/hirowallet.svg" alt="Hiro Wallet" />
    <Span class="text-xs pl-7">Coming soon</Span>
  </DropdownItem>
  <DropdownItem>
    <img
      class="h-4"
      id="metamask-wallet"
      src="/metamask.svg"
      alt="Metamask Wallet"
    /><Span class="text-xs pl-7">Coming soon</Span></DropdownItem
  >
</Dropdown>
