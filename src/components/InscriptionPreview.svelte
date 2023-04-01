<script lang="ts">
  import { Badge, Button } from 'flowbite-svelte';
  import { Heading } from 'flowbite-svelte';

  import { fileName, orderStatus, inscriptionId, feeRate } from '../stores';

  $: inscriptionLink = `https://ordinals.com/inscription/${$inscriptionId}`;

  const cancelPreview = () => {
    $fileName = '';
    $feeRate = 0;
  };
</script>

{#if $orderStatus == 8}
  <Badge border color="purple">Order complete</Badge>
{:else}
  <Heading class="text-lg mb-1">Inscription Preview</Heading>
{/if}
<div class="p-4 bg-primary-50 rounded-lg dark:bg-gray-800 mb-4  w-full">
  <img src={$fileName} class="rounded drop-shadow-lg mb-3" alt="Not found" />

  {#if $orderStatus == 8}
    <Button
      gradient
      color="purpleToPink"
      class="mt-2 mb-3 w-2/3"
      href={inscriptionLink}
      target="_blank">See your inscription</Button
    >
  {/if}

  {#if $orderStatus < 1}
    <Button outline size="xs" color="purple" on:click={cancelPreview}
      >Cancel</Button
    >
  {/if}
</div>
