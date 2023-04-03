<script>
  import { Alert, P } from 'flowbite-svelte';
  import { receiveAddress, orderStatus } from '../stores';
  import { CheckCircle } from 'svelte-heros-v2';

  $: receiveAddressFirst = $receiveAddress.slice(0, $receiveAddress.length / 2);
  $: receiveAddressSecond = $receiveAddress.slice($receiveAddress.length / 2);
</script>

<!-- Show validated address in button -->

<Alert color="purple" class="mt-5" id="screenshotDiv">
  <div slot="extra">
    <P
      size="lg"
      weight="bold"
      class="font-medium text-center"
      color="currentColor flex whitespace-nowrap justify-center"
    >
      Receive address
      {#if $orderStatus < 1}
        <CheckCircle size="30" variation="outline" class="pl-1" />
      {/if}
    </P>
    <P size="sm" color="currentColor" class="block text-center font-mono"
      >{receiveAddressFirst}</P
    >
    <P size="sm" color="currentColor" class="block text-center font-mono"
      >{receiveAddressSecond}</P
    >
  </div>
</Alert>
