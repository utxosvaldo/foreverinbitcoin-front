<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { Heading } from 'flowbite-svelte';

  import { fileName, priorityFees, feePriority } from '../stores';

  export let src: string;
  export let canCancel: boolean = true;

  const cancelPreview = () => {
    $fileName = '';
  };
</script>

<!-- <Card img="/test.png" padding="sm" > -->
<Heading class="text-lg mb-2">Preview</Heading>

<img {src} class="rounded drop-shadow-lg" alt="Not found" />

{#if canCancel}
  <Button outline size="xs" color="purple" class="mb-5" on:click={cancelPreview}
    >Cancel</Button
  >
{/if}
