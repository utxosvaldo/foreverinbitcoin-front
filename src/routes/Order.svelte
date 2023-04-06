<script lang="ts">
  import { Button, DarkMode, Span, Spinner } from 'flowbite-svelte';
  import { Card } from 'flowbite-svelte';
  // import FilePond from './components/FilePond.svelte';
  import Heading from '../components/Heading.svelte';
  import FeeTabs from '../components/fees/FeeTabs.svelte';
  import InscriptionPreview from '../components/InscriptionPreview.svelte';
  import PaymentStatus from '../components/PaymentStatus.svelte';

  import BackUpAlert from '../components/alerts/BackUpAlert.svelte';

  import { ConvertOrder } from '../interfaces/order';
  import {
    fileName,
    receiveAddress,
    feeRate,
    orderId,
    networkFee,
    serviceFee,
    totalAmount,
    feePriority,
    orderStatus,
    inscriptionId,
    inscriptionSentTx,
    checkoutLink,
    rateUSD,
    orderType,
    loadingOrder,
    inscriptionNumber
  } from '../stores';
  import { onMount } from 'svelte';
  import FeeTabConfirmed from '../components/fees/FeeTabConfirmed.svelte';
  import NavBar from '../components/NavBar.svelte';
  import Footer from '../components/Footer.svelte';
  import { Envelope } from 'svelte-heros-v2';

  interface QueryParams {
    orderId: number;
  }

  export let params: QueryParams = {
    orderId: 0
  };

  $: supportLink = `mailto:support@foreverinbitcoin.com?subject=ForeverinBitcoin order: ${params.orderId} not found`;

  async function fetchOrder() {
    $loadingOrder = true;
    const response = await fetch(`/api/orders/${params.orderId}`);
    // data = await response.json();
    if (response.status != 200) {
      // No order found
      $loadingOrder = false;
      return;
    }

    const data = ConvertOrder.toOrder(await response.text());

    console.log('data', data);

    fileName.set(data.filename);
    receiveAddress.set(data.receiveAddress);
    orderId.set(data.orderId);
    orderType.set(data.orderType);
    orderStatus.set(data.status);
    feeRate.set(data.feeRate);
    networkFee.set(data.networkFee);
    serviceFee.set(data.serviceFee);
    totalAmount.set(data.totalAmount);
    feePriority.set(data.feePriority);
    inscriptionId.set(data.inscriptionId);
    inscriptionNumber.set(data.inscriptionNumber);
    inscriptionSentTx.set(data.inscriptionSentTx);
    checkoutLink.set(data.checkoutLink);
    rateUSD.set(data.rateUSD);

    $loadingOrder = false;
  }

  onMount(fetchOrder);
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
      {#if $loadingOrder}
        <Spinner color="purple" size="10" />
      {:else if $orderId}
        <InscriptionPreview />
        <PaymentStatus />
        <FeeTabConfirmed />
        <BackUpAlert />
        <!-- <PaymentStatus /> -->
      {:else}
        <Span>No order found with order id:</Span>
        <Span>{params.orderId}</Span>
        <div class="flex mt-2">
          <Button outline color="purple" class="mr-1" href={supportLink}>
            <Envelope class="mr-3" />
            Contact support
          </Button>
          <Button color="purple" class="ml-1" href={'/'}>
            <!-- <Envelope class="mr-3" /> -->
            Home
          </Button>
        </div>
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
    background-image: url('/violet-blue-bg.webp');
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
