<script lang="ts">
  import { Badge, Button } from 'flowbite-svelte';
  import { Heading } from 'flowbite-svelte';

  import {
    fileName,
    priorityFees,
    feePriority,
    orderStatus,
    inscriptionId
  } from '../stores';

  export let src: string;
  // export let canCancel: boolean = true;

  $: inscriptionLink = `https://ordinals.com/inscription/${$inscriptionId}`;

  const cancelPreview = () => {
    $fileName = '';
  };
</script>

<!-- <Card img="/test.png" padding="sm" > -->
{#if $orderStatus == 8}
  <Badge border color="purple">Order complete</Badge>
{:else}
  <Heading class="text-lg mb-2">Inscription Preview</Heading>
{/if}

<img {src} class="rounded drop-shadow-lg mb-3" alt="Not found" />

{#if $orderStatus == 8}
  <Button
    gradient
    color="purpleToPink"
    class="mt-2 mb-3 w-2/3"
    href={inscriptionLink}>See your inscription</Button
  >
{/if}

{#if $orderStatus < 1}
  <Button outline size="xs" color="purple" class="mb-5" on:click={cancelPreview}
    >Cancel</Button
  >
{/if}
