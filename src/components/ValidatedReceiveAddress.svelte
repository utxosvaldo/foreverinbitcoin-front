<script>
  import { Button, Card, Label, P, Span } from 'flowbite-svelte';
  import { receiveAddress } from '../stores';

  $: receiveAddressFirst = $receiveAddress.slice(0, $receiveAddress.length / 2);
  $: receiveAddressSecond = $receiveAddress.slice($receiveAddress.length / 2);
</script>

<!-- Show validated address in button -->

<div>
  <P
    size="lg"
    weight="bold"
    class="font-medium text-center"
    color="currentColor"
  >
    Receive addres
  </P>
  <!-- <div class="  text-xs"> -->
  <P size="sm" color="currentColor" class="block text-center font-mono"
    >{receiveAddressFirst}</P
  >
  <P size="sm" color="currentColor" class="block text-center font-mono"
    >{receiveAddressSecond}</P
  >
  <!-- </div> -->
</div>
<!-- <Button outline color="purple" class="mt-- bg-purple-50 hover:bg-purple-50">
  <div class="font-thin  text-xs">
    <Span class="block">{receiveAddressFirst}</Span>
    <Span class="block">{receiveAddressSecond}</Span>
  </div>
</Button>
<Card class="bg-blue">
  <div class="font-thin  text-xs">
    <Span class="block">{receiveAddressFirst}</Span>
    <Span class="block">{receiveAddressSecond}</Span>
  </div>
</Card> -->
