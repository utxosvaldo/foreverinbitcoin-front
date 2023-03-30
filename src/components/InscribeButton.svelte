<script lang="ts">
  import { Button, Card, Span } from 'flowbite-svelte';
  import { receiveAddress, fileName } from '../stores';

  $: disableButton = $fileName == '' || $receiveAddress == '';
</script>

<div class="mb-6">
  {#if disableButton}
    <Button gradient color="purpleToPink" class="mt-2" disabled>Inscribe</Button
    >
  {:else}
    <Button gradient color="purpleToPink" class="mt-2">Inscribe</Button>
  {/if}
</div>
