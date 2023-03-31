<script lang="ts">
  import { DarkMode, Span } from 'flowbite-svelte';
  import { Card } from 'flowbite-svelte';
  // import FilePond from './components/FilePond.svelte';
  import Heading from './components/Heading.svelte';
  import InputTabs from './components/inputs/InputTabs.svelte';
  import FeeTabs from './components/fees/FeeTabs.svelte';
  import InscriptionPreview from './components/InscriptionPreview.svelte';
  import ReceiveAddressInput from './components/ReceiveAddressInput.svelte';
  import OrderDetails from './components/OrderDetails.svelte';
  import PaymentStatus from './components/PaymentStatus.svelte';

  import { fileName, orderStatus } from './stores';
  import InscribeButton from './components/InscribeButton.svelte';
  import BackUpAlert from './components/alerts/BackUpAlert.svelte';

  $: showInscriptionPreview = $fileName !== '';
</script>

<!-- <DarkMode /> -->
<div
  id="main"
  class="p-8 overflow-auto bg-gray-50 dark:bg-gray-900 justify-start text-center"
>
  <Heading />
  <div class="flex justify-center pt-8">
    <Card class="items-center gap-2">
      {#if showInscriptionPreview}
        <!-- {#if true} -->
        <InscriptionPreview src={$fileName} />
        {#if true}
          <FeeTabs />
        {/if}
      {:else}
        <InputTabs />
      {/if}

      {#if $fileName !== ''}
        {#if $orderStatus < 1}
          <ReceiveAddressInput />
          <InscribeButton />
        {:else}
          <BackUpAlert />
          <PaymentStatus />
        {/if}
      {/if}
    </Card>
  </div>
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
