<script lang="ts">
  import { DarkMode, Span } from 'flowbite-svelte';
  import { Card } from 'flowbite-svelte';
  // import FilePond from './components/FilePond.svelte';
  import Heading from '../components/Heading.svelte';
  import InputTabs from '../components/inputs/InputTabs.svelte';
  import FeeTabs from '../components/fees/FeeTabs.svelte';
  import InscriptionPreview from '../components/InscriptionPreview.svelte';
  import ReceiveAddressInput from '../components/ReceiveAddressInput.svelte';
  import PaymentStatus from '../components/PaymentStatus.svelte';

  import {
    fileName,
    orderStatus,
    orderId,
    feeRate,
    receiveAddress,
    walletConnected
  } from '../stores';
  import InscribeButton from '../components/InscribeButton.svelte';
  import BackUpAlert from '../components/alerts/BackUpAlert.svelte';
  import FeeTabConfirmed from '../components/fees/FeeTabConfirmed.svelte';
  import NavBar from '../components/NavBar.svelte';
  import Footer from '../components/Footer.svelte';
  import HiroConnectButton from '../components/wallets/HiroConnectButton.svelte';
  import ValidatedReceiveAddress from '../components/ValidatedReceiveAddress.svelte';
  import WalletReceiveAddress from '../components/WalletReceiveAddress.svelte';

  // $: showInscriptionPreview = $fileName !== '';
</script>

<!-- <DarkMode /> -->
<div
  id="main"
  class="relative px-2 sm:px-5 py-4 overflow-auto justify-start text-center"
>
  <NavBar />
  <Heading />
  <div class="flex justify-center pt-8">
    <Card class="items-center gap-2">
      {#if $feeRate != 0}
        <InscriptionPreview />
        {#if $orderId}
          <FeeTabConfirmed />
        {:else}
          <FeeTabs />
        {/if}
      {:else}
        <InputTabs />
      {/if}

      <!-- {#if $receiveAddress != ''}
        <WalletReceiveAddress />
        <InscribeButton />
      {/if} -->

      <!-- {#if $feeRate !== 0}
        {#if $orderStatus < 1}
          <ReceiveAddressInput />
          <InscribeButton />
        {:else}
          <BackUpAlert />
          <PaymentStatus />
        {/if}
      {/if} -->

      <!-- {#if $walletConnected}
        <WalletReceiveAddress />
      {:else}
        <ReceiveAddressInput />
      {/if} -->

      {#if $orderStatus >= 1}
        <BackUpAlert />
        <PaymentStatus />
      {:else}
        {#if $walletConnected}
          <WalletReceiveAddress />
        {:else if $feeRate != 0}
          <ReceiveAddressInput />
          <!-- <InscribeButton /> -->
        {/if}
        {#if $fileName != '' && $feeRate != 0}
          <InscribeButton />
        {/if}
      {/if}
    </Card>
  </div>
  <Footer />
</div>

<style>
  #main {
    /* /* margin: 10px; */
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-image: url('/violet-blue-bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
