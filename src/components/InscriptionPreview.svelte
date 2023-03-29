<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { Heading } from 'flowbite-svelte';

  import { fileName, priorityFees, feePriority } from '../stores';

  export let src: string;

  const cancelPreview = () => {
    $fileName = '';
  };
</script>

<!-- <Card img="/test.png" padding="sm" > -->
<Heading class="text-lg mb-2">Preview</Heading>

<img {src} class="rounded drop-shadow-lg" alt="Not found" />

<Button size="xs" color="red" class="mb-5" on:click={cancelPreview}
  >Cancel</Button
>
