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
    totalAmount
  } from '../stores';
  import { ConvertOrder } from '../interfaces/order';

  $: disableButton = $fileName == '' || $receiveAddress == '';

  async function createOrder() {
    const requestData = {
      filename: $fileName,
      orderType: 'image',
      receiveAddress: $receiveAddress,
      receiveAddressType: 'segwit',
      feeRate: $feeRate,
      feePriority: $feePriority
    };

    console.log(requestData);
    // TODO get url from env var
    const response = await fetch('/orders', {
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

<div class="mb-6">
  {#if disableButton}
    <Button gradient color="purpleToPink" class="mt-2" disabled>Inscribe</Button
    >
  {:else}
    <Button
      gradient
      color="purpleToPink"
      class="mt-2"
      size="xl"
      on:click={createOrder}>Inscribe</Button
    >
  {/if}
</div>
