<script lang="ts">
  import { Button, Card } from 'flowbite-svelte';
  import { Spinner } from 'flowbite-svelte';
  import { CheckCircle, XCircle, Envelope } from 'svelte-heros-v2';
  import {
    checkoutLink,
    orderStatus,
    orderId,
    inscriptionId,
    inscriptionSentTx
  } from '../stores';

  // let supportLink = 'mailto:support@foreverinbitcoin.com';

  // $orderStatus = 9;
  $: receiptLink = $checkoutLink + '/receipt';
  $: sendTxLink = `https://mempool.space/tx/${$inscriptionSentTx}`;
  $: supportLink = `mailto:support@foreverinbitcoin.com?subject=ForeverinBitcoin order: ${$orderId}`;
</script>

{#if $orderStatus !== 9}
  {#if $orderStatus == 1}
    <Card class="w-full">
      <div class=" w-full flex justify-around">
        <Spinner size="12" color="purple" class="text-center mr-3 " />
        <div class="w-full grid justify-items-stretch">
          <strong>Waiting on payment...</strong>
          <Button
            gradient
            color="purpleToPink"
            class="mt-2"
            href={$checkoutLink}
          >
            Pay in checkout
          </Button>
        </div>
      </div>
    </Card>
  {:else if $orderStatus == 2}
    <Card class="w-full">
      <div class=" w-full flex justify-around">
        <Spinner size="12" color="purple" class="text-center mr-3" />
        <div class="w-full grid justify-items-stretch">
          <strong>Payment detected, waiting confirmation...</strong>
          <Button gradient color="purpleToPink" class="mt-2" href={receiptLink}>
            See your receipts
          </Button>
        </div>
      </div>
    </Card>
  {:else if $orderStatus >= 3}
    <Card class="w-full">
      <div class=" w-full flex justify-around">
        <!-- <Spinner size="12" color="purple" class="text-center mr-3" /> -->
        <CheckCircle size="50" class="text-purple-700 mr-3" />
        <div class="w-full grid justify-items-stretch">
          <strong>Payment confirmed.</strong>
          <Button outline color="purple" class="mt-2" href={receiptLink}>
            See your receipt
          </Button>
        </div>
      </div>
    </Card>
  {/if}

  {#if $orderStatus == 4}
    <Card class="w-full">
      <div class=" w-full flex justify-around">
        <Spinner size="12" color="purple" class="text-center mr-3" />
        <div class="w-full grid justify-items-stretch">
          <strong>Processing Inscription...</strong>
        </div>
      </div>
    </Card>
  {:else if $orderStatus == 8}
    <Card class="w-full">
      <div class=" w-full flex justify-around">
        <!-- <Spinner size="12" color="purple" class="text-center mr-3" /> -->
        <CheckCircle size="50" class="text-purple-700 mr-3" />
        <div class="w-full grid justify-items-stretch">
          <strong>Inscription sent to your receive address.</strong>
          <Button outline color="purple" class="mt-2" href={sendTxLink}>
            See sent transaction
          </Button>
        </div>
      </div>
    </Card>
  {/if}
{:else}
  <Card class="w-full">
    <div class=" w-full flex justify-around">
      <!-- <Spinner size="12" color="purple" class="text-center mr-3" /> -->
      <XCircle size="50" class="text-purple-700 mr-3" />
      <div class="w-full grid justify-items-stretch">
        <p>Something happened with your order inscription</p>
        <Button color="purple" class="mt-2" href={supportLink}>
          <Envelope class="mr-3" />
          Contact support
        </Button>
      </div>
    </div>
  </Card>
{/if}
