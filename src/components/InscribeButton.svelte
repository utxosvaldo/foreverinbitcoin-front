<script lang="ts">
  import { Button, Card, Span } from 'flowbite-svelte';
  import {
    receiveAddress,
    fileName,
    checkoutLink,
    feePriority,
    feeRate,
    orderStatus,
    orderId,
    networkFee,
    serviceFee,
    totalAmount,
    rateUSD,
    orderType,
    receiveAddressType,
    promoCode
  } from '../stores';
  import { ConvertOrder } from '../interfaces/order';

  $: disableButton = $fileName == '' || $receiveAddress == '' || $feeRate == 0;

  async function createOrder() {
    const requestData = {
      filename: $fileName,
      orderType: $orderType,
      receiveAddress: $receiveAddress,
      receiveAddressType: $receiveAddressType,
      feeRate: $feeRate,
      feePriority: $feePriority,
      promoCode: $promoCode
    };

    console.log(requestData);
    // TODO get url from env var
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });
    // console.log(await response.json());

    const data = ConvertOrder.toOrder(await response.text());
    console.log(data);

    checkoutLink.set(data.checkoutLink);
    orderStatus.set(data.status);
    orderId.set(data.orderId);
    networkFee.set(data.networkFee);
    serviceFee.set(data.serviceFee);
    totalAmount.set(data.totalAmount);
    fileName.set(data.filename);
  }
</script>

<div class="mb-2 w-full">
  {#if disableButton}
    <Button outline gradient color="purpleToPink" size="xl" disabled
      >Inscribe</Button
    >
  {:else}
    <Button
      gradient
      color="purpleToPink"
      class="w-full"
      size="xl"
      on:click={createOrder}>Inscribe</Button
    >
  {/if}
</div>
