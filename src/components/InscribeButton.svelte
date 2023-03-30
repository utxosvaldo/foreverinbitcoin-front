<script lang="ts">
  import { Button, Card, Span } from 'flowbite-svelte';
  import {
    receiveAddress,
    fileName,
    checkoutLink,
    feePriority,
    feeRate,
    orderStatus,
    orderId
  } from '../stores';
  import { ConvertOC } from '../interfaces/orderConfirmation';

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
    const response = await fetch('http://localhost/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });
    // console.log(await response.json());

    const data = ConvertOC.toOrderConfirmation(await response.text());
    console.log(data);

    checkoutLink.set(data.checkoutLink);
    orderStatus.set(data.status);
    orderId.set(data.orderId);
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
