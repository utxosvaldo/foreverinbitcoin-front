<script lang="ts">
  import { Button, Input } from 'flowbite-svelte';
  import { onMount } from 'svelte';
  import { ArrowLeftOnRectangle, Check } from 'svelte-heros-v2';

  export let input: String;
  export let validate: () => void;

  let addressInput;
  // this works here, but not in Sapper:
  onMount(() => addressInput.focus());
</script>

<Input
  let:props
  id="receiveAddress"
  placeholder="bc1p... | bc1q..."
  class="text-center bg-primary-50 focus:border-purple-500"
  size="md"
>
  <ArrowLeftOnRectangle slot="left" />
  <input
    {...props}
    bind:this={addressInput}
    bind:value={input}
    on:blur={validate}
    on:paste={validate}
  />
  <Check slot="right" class="text-primary-700 dark:text-pink-700" />
</Input>
