<script lang="ts">
  import { DarkMode, Span } from 'flowbite-svelte';
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
    orderType
  } from '../stores';
  import { onMount } from 'svelte';
  import FeeTabConfirmed from '../components/fees/FeeTabConfirmed.svelte';

  export let params = {};

  async function fetchOrder() {
    const response = await fetch(`/orders/${params.orderId}`);
    // data = await response.json();
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
    inscriptionSentTx.set(data.inscriptionSentTx);
    checkoutLink.set(data.checkoutLink);
    rateUSD.set(data.rateUSD);
  }

  onMount(fetchOrder);
</script>

<!-- <DarkMode /> -->
<div
  id="main"
  class="p-8 overflow-auto bg-gray-50 dark:bg-gray-900 justify-start text-center"
>
  <Heading />
  <div class="flex justify-center pt-8">
    <Card class="items-center gap-2">
      <InscriptionPreview />
      <FeeTabConfirmed />
      <BackUpAlert />
      <PaymentStatus />
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
