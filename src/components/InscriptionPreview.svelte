<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { Heading } from 'flowbite-svelte';

  export let src: string;
</script>

<!-- <Card img="/test.png" padding="sm" > -->
<Heading class="text-lg mb-2">Your inscription preview</Heading>

<img {src} class="rounded drop-shadow-lg" alt="Not found" />

<Button size="xs" color="red" class="mb-5">Cancel</Button>
